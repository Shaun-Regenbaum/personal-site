<!-- Inspired by https://github.com/adamsky/globe -->
<script lang="ts">
	import { onMount } from 'svelte';
	
	let earthTexture: string[] = [];
	let rotation = 0;
	let verticalRotation = 0; // Add vertical rotation
	let isPaused = false;
	let textureLoaded = false;
	let isMobile = false;
	
	// Touch handling
	let touchStartX = 0;
	let touchStartY = 0;
	let touchStartRotation = 0;
	let touchStartVerticalRotation = 0;
	
	// Israel's position (31°N, 35°E)
	// In texture coordinates: row = 75 * (90 - 31) / 180 = ~25, col = 300 * (35 + 180) / 360 = ~179
	const israelRow = 25;
	const israelCol = 179;
	
	onMount(async () => {
		// Check if mobile
		isMobile = window.innerWidth < 768;
		
		// Load the earth texture
		try {
			const response = await fetch('/earth.txt');
			const text = await response.text();
			earthTexture = text.split('\n').filter(line => line.length > 0);
			textureLoaded = true;
		} catch (e) {
			console.error('Failed to load earth texture:', e);
			textureLoaded = false;
		}
		
		// Animation loop
		const interval = setInterval(() => {
			if (!isPaused && textureLoaded) {
				rotation = (rotation + 2) % 360;
			}
		}, 100);
		
		// Handle resize
		const handleResize = () => {
			isMobile = window.innerWidth < 768;
		};
		window.addEventListener('resize', handleResize);
		
		return () => {
			clearInterval(interval);
			window.removeEventListener('resize', handleResize);
		};
	});
	
	function renderGlobe(): string[][] {
		// Adjust size for mobile
		const radius = isMobile ? 12 : 18;
		const width = isMobile ? 50 : 80;
		const height = isMobile ? 25 : 40;
		const centerX = width / 2;
		const centerY = height / 2;
		
		if (!textureLoaded || earthTexture.length === 0) {
			// Return empty globe while loading
			const emptyGlobe: string[][] = [];
			for (let y = 0; y < height; y++) {
				emptyGlobe.push(Array(width).fill(' '));
			}
			return emptyGlobe;
		}
		
		const output: string[][] = [];
		
		for (let y = 0; y < height; y++) {
			const row: string[] = [];
			for (let x = 0; x < width; x++) {
				// Calculate distance from center with aspect ratio correction
				const dx = (x - centerX) / 2;
				const dy = y - centerY;
				const dist = Math.sqrt(dx * dx + dy * dy);
				
				if (dist <= radius) {
					// We're inside the globe
					// Calculate 3D position on sphere
					const z = Math.sqrt(Math.max(0, radius * radius - dx * dx - dy * dy));
					
					// Convert to spherical coordinates (FIXED: proper equatorial view)
					// Apply vertical rotation to view angle
					const verticalRadians = verticalRotation * Math.PI / 180;
					
					// Transform coordinates based on vertical rotation
					const normalizedX = dx / radius;
					const tempY = dy / radius;
					const tempZ = z / radius;
					
					// Apply vertical rotation (rotation around X axis)
					const normalizedY = tempY * Math.cos(verticalRadians) - tempZ * Math.sin(verticalRadians);
					const normalizedZ = tempY * Math.sin(verticalRadians) + tempZ * Math.cos(verticalRadians);
					
					// Calculate longitude from x and z
					let lon = Math.atan2(normalizedX, normalizedZ) * 180 / Math.PI;
					lon = (lon + rotation) % 360;
					if (lon < 0) lon += 360;
					
					// Calculate latitude from y (flip to fix upside-down issue)
					const lat = -Math.asin(normalizedY) * 180 / Math.PI;
					
					// Map to texture coordinates
					const texRow = Math.floor((90 - lat) * earthTexture.length / 180);
					const texCol = Math.floor(lon * earthTexture[0].length / 360);
					
					// Check if we're near Israel
					const isNearIsrael = Math.abs(texRow - israelRow) < 2 && Math.abs(texCol - israelCol) < 3;
					
					if (isNearIsrael && z > radius * 0.3) {
						// Israel marker (only if visible)
						row.push('◉');
					} else if (texRow >= 0 && texRow < earthTexture.length && texCol >= 0 && texCol < earthTexture[0].length) {
						const char = earthTexture[texRow][texCol];
						
						// Apply shading based on z (depth)
						const brightness = normalizedZ;
						
						// Map texture characters to display characters with shading
						if (char === '@' || char === 'g' || char === 'H') {
							// Land
							if (brightness > 0.8) {
								row.push('#');
							} else if (brightness > 0.6) {
								row.push('█');
							} else if (brightness > 0.4) {
								row.push('▓');
							} else {
								row.push('▒');
							}
						} else if (char === '.') {
							// Ocean
							if (brightness > 0.8) {
								row.push('·');
							} else if (brightness > 0.6) {
								row.push(':');
							} else if (brightness > 0.4) {
								row.push('~');
							} else {
								row.push('-');
							}
						} else {
							// Unknown/space
							row.push(' ');
						}
					} else {
						row.push(' ');
					}
				} else if (dist <= radius + 0.5) {
					// Globe edge
					row.push('o');
				} else {
					row.push(' ');
				}
			}
			output.push(row);
		}
		
		return output;
	}
	
	$: globeGrid = renderGlobe();
	$: if (rotation >= 0 || verticalRotation !== undefined || textureLoaded || isMobile !== undefined) {
		globeGrid = renderGlobe();
	}
	
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === ' ') {
			e.preventDefault();
			isPaused = !isPaused;
		} else if (e.key === 'ArrowLeft') {
			e.preventDefault();
			rotation = (rotation - 10 + 360) % 360;
		} else if (e.key === 'ArrowRight') {
			e.preventDefault();
			rotation = (rotation + 10) % 360;
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			verticalRotation = verticalRotation - 10;
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			verticalRotation = verticalRotation + 10;
		}
	}
	
	function handleTouchStart(e: TouchEvent) {
		e.preventDefault();
		if (e.touches.length === 1) {
			touchStartX = e.touches[0].clientX;
			touchStartY = e.touches[0].clientY;
			touchStartRotation = rotation;
			touchStartVerticalRotation = verticalRotation;
		}
	}
	
	function handleTouchMove(e: TouchEvent) {
		e.preventDefault();
		if (e.touches.length === 1) {
			const deltaX = e.touches[0].clientX - touchStartX;
			const deltaY = e.touches[0].clientY - touchStartY;
			
			// Horizontal swipe for rotation
			rotation = (touchStartRotation + deltaX * 0.5) % 360;
			if (rotation < 0) rotation += 360;
			
			// Vertical swipe for tilt
			verticalRotation = touchStartVerticalRotation - deltaY * 0.3;
		}
	}
	
	function handleTouchEnd(e: TouchEvent) {
		// Optional: add momentum or snap to position
	}
	
	function getCharClass(char: string): string {
		switch(char) {
			case '◉': return 'text-orange-400 font-bold animate-pulse';
			case '#': return 'text-green-400';
			case '█': return 'text-green-500';
			case '▓': return 'text-green-600';
			case '▒': return 'text-green-700';
			case 'o': return 'text-green-300';
			case '·': return 'text-blue-600';
			case ':': return 'text-blue-500';
			case '~': return 'text-blue-400';
			case '-': return 'text-blue-300';
			default: return '';
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="select-none font-mono" on:touchstart={handleTouchStart} on:touchmove={handleTouchMove} on:touchend={handleTouchEnd}>
	{#if !textureLoaded}
		<div class="text-green-400 text-xs">Loading globe texture...</div>
	{:else}
		<div class="text-xs leading-none overflow-hidden">
			{#each globeGrid as row}
				<div class="flex">
					{#each row as char}
						<span class="{getCharClass(char)} inline-block w-[0.5em]">{char}</span>
					{/each}
				</div>
			{/each}
		</div>
		<div class="text-xs text-green-300 mt-2">
			<span class="text-orange-400">◉</span> = ישראל | 
			{#if isMobile}
				<span class="ml-2">Drag to rotate/tilt</span>
			{:else}
				<span class="ml-2">Space = pause | ← → = rotate | ↑ ↓ = tilt</span>
			{/if}
		</div>
	{/if}
</div>