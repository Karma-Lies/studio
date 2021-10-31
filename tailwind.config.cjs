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
			backgroundColor: {
				brand: '#e1e1e1',
			},
			fontFamily: {
				mirage: ['Solide\\ Mirage', 'Helvetica', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
