import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.cjs';
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter(),
	},

	preprocess: [
		mdsvex(mdsvexConfig),
		sveltePreprocess({
			postcss: true,
		}),
	],
};
