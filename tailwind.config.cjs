/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				pixel: 'pixel',
				coolvetica: 'coolvetica',
				steamy: 'steamy',
				science: 'science',
				jump: 'jump',
				aorell: 'aorell',
				threeam: 'threeam',
				rainy: 'rainy',
				Vilna: ['Vilna', 'bold'],
				Rashi: 'Rashi'
			}
		}
	},
	plugins: []
};
