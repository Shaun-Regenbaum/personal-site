// Generates static/favicon.svg by porting the AsciiGlobe renderGlobe() logic
// so the favicon matches the rotating globe on the home page.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const earthTexture = readFileSync(resolve(root, 'static/earth.txt'), 'utf8')
	.split('\n')
	.filter((line) => line.length > 0);

// Orientation chosen to face the Israel marker, like the home page screenshot.
const rotation = 215;
const verticalRotation = 0;

// Israel marker position (same as the component).
const israelRow = 25;
const israelCol = 179;

// Globe geometry (desktop params from AsciiGlobe.svelte).
const radius = 18;
const width = 80;
const height = 40;
const centerX = width / 2;
const centerY = height / 2;

function renderGlobe() {
	const output = [];
	for (let y = 0; y < height; y++) {
		const row = [];
		for (let x = 0; x < width; x++) {
			const dx = (x - centerX) / 2;
			const dy = y - centerY;
			const dist = Math.sqrt(dx * dx + dy * dy);

			if (dist <= radius) {
				const z = Math.sqrt(Math.max(0, radius * radius - dx * dx - dy * dy));
				const verticalRadians = (verticalRotation * Math.PI) / 180;
				const normalizedX = dx / radius;
				const tempY = dy / radius;
				const tempZ = z / radius;
				const normalizedY = tempY * Math.cos(verticalRadians) - tempZ * Math.sin(verticalRadians);
				const normalizedZ = tempY * Math.sin(verticalRadians) + tempZ * Math.cos(verticalRadians);

				let lon = (Math.atan2(normalizedX, normalizedZ) * 180) / Math.PI;
				lon = (lon + rotation) % 360;
				if (lon < 0) lon += 360;

				const lat = (-Math.asin(normalizedY) * 180) / Math.PI;
				const texRow = Math.floor(((90 - lat) * earthTexture.length) / 180);
				const texCol = Math.floor((lon * earthTexture[0].length) / 360);

				const isNearIsrael = Math.abs(texRow - israelRow) < 2 && Math.abs(texCol - israelCol) < 3;

				if (isNearIsrael && z > radius * 0.3) {
					row.push('@israel');
				} else if (
					texRow >= 0 &&
					texRow < earthTexture.length &&
					texCol >= 0 &&
					texCol < earthTexture[0].length
				) {
					const char = earthTexture[texRow][texCol];
					const brightness = normalizedZ;
					if (char === '@' || char === 'g' || char === 'H') {
						if (brightness > 0.8) row.push('#');
						else if (brightness > 0.6) row.push('B');
						else if (brightness > 0.4) row.push('M');
						else row.push('m');
					} else if (char === '.') {
						if (brightness > 0.8) row.push('.');
						else if (brightness > 0.6) row.push(':');
						else if (brightness > 0.4) row.push('~');
						else row.push('-');
					} else {
						row.push(' ');
					}
				} else {
					row.push(' ');
				}
			} else if (dist <= radius + 0.5) {
				row.push('o');
			} else {
				row.push(' ');
			}
		}
		output.push(row);
	}
	return output;
}

// Token -> fill color, mirroring getCharClass() in the component.
const COLORS = {
	'@israel': '#fb923c', // orange-400
	'#': '#4ade80', // green-400
	B: '#22c55e', // green-500
	M: '#16a34a', // green-600
	m: '#15803d', // green-700
	o: '#86efac', // green-300
	'.': '#2563eb', // blue-600
	':': '#3b82f6', // blue-500
	'~': '#60a5fa', // blue-400
	'-': '#93c5fd' // blue-300
};
const GLYPH = {
	'@israel': '◉', // ◉
	'#': '#',
	B: '█', // █
	M: '▓', // ▓
	m: '▒', // ▒
	o: 'o',
	'.': '·', // ·
	':': ':',
	'~': '~',
	'-': '-'
};

const grid = renderGlobe();

// Cell metrics: dx halves x so cells are 2 units wide per column to look round.
const cellW = 12;
const cellH = 20;
const svgW = width * cellW;
const svgH = height * cellH;

let cells = '';
for (let y = 0; y < grid.length; y++) {
	for (let x = 0; x < grid[y].length; x++) {
		const tok = grid[y][x];
		if (tok === ' ') continue;
		const cx = x * cellW + cellW / 2;
		const cy = y * cellH + cellH / 2;
		cells += `<text x="${cx}" y="${cy}" fill="${COLORS[tok]}">${GLYPH[tok]}</text>\n`;
	}
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgW} ${svgH}" width="${svgW}" height="${svgH}">
<rect width="${svgW}" height="${svgH}" fill="#000000"/>
<g font-family="monospace" font-size="${cellH}px" font-weight="bold" text-anchor="middle" dominant-baseline="central">
${cells}</g>
</svg>
`;

writeFileSync(resolve(root, 'static/favicon.svg'), svg);
console.log(`Wrote static/favicon.svg (${svgW}x${svgH}, ${cells.split('\n').length - 1} glyphs)`);
