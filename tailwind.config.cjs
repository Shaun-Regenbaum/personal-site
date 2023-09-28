/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				pixel: 'pixel',
				coolvetica: 'coolvetica',
				steamy: 'steamy',
				jump: 'jump',

				science: 'science',
				aorell: 'aorell',
				threeam: 'threeam',
				rainy: 'rainy',
				Vilna: ['Vilna', 'bold'],
				Rashi: 'Rashi',
				metropolis: 'Metropolis'
			},
			backgroundImage: {
				'noise': "url('/img/hero-pattern.svg')",
				'footer-texture': "url('/img/footer-texture.png')"
			}
		}
	},
	plugins: []
};
