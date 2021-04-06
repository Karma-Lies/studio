<script>
	import '../global.css';
	import MarqueeTextWidget from 'svelte-marquee-text-widget';
	import { vowelIndexes, wordfucker } from '../lib/random/strings.js';

	let topic = [
		'brand awareness',
		'digital marketing',
		'product launches',
		'creative imagery',
		'experience design',
		'music videos',
		'web presence',
		'social campaigns',
		'taste curated',
	];

	const company = 'Karma Lies';
	const vowels = vowelIndexes(company);
	$: brand = company;

	setInterval(() => (brand = wordfucker(company, brand, vowels)), 150);
</script>

<header>
	<nav class="w-full space-x-2 mx-auto font-mono font-semibold">
		<a href=".">home</a>
		<a href="example-markdown">blog</a>
		<h1 class="text-8xl inline font-mirage">{brand}</h1>
		<span>an unorthodox digital agency</span>
	</nav>

	<ul class="text-gray-100 bg-black py-1">
		<MarqueeTextWidget repeat={4}>
			{#each topic as attribute}
				<li class="inline mx-1 font-mono font-bold tracking-tight">
					{attribute}
				</li>
			{/each}
		</MarqueeTextWidget>
	</ul>
</header>
<slot />
