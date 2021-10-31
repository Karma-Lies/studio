module.exports = {
	mode: 'jit',
	purge: {
		content: ['./src/**/*.{html,js,svelte,ts}'],
		options: {
			keyframes: true,
		},
	},
	theme: {
		extend: {
			colors: {
				'rich-black': '#080708',
				vermilion: '#E03616',
				'cerulean-frost': '#5998C5',
				sunglow: '#FDCA40',
				platinum: '#E6E8E6',
			},
			fontFamily: {
				mirage: ['Solide\\ Mirage', 'Helvetica', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
