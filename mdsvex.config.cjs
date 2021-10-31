module.exports = {
	extensions: ['.svx', '.md'],
	smartypants: {
		dashes: 'oldschool',
	},
	remarkPlugins: [
		[
			import('remark-github'),
			{
				// Use your own repository
				repository: 'https://github.com/svelte-add/mdsvex.git',
			},
		],
		import('remark-abbr'),
	],
	rehypePlugins: [
		import('rehype-slug'),
		[
			import('rehype-autolink-headings'),
			{
				behavior: 'wrap',
			},
		],
	],
};
