<script>
	import '../global.css';
	import MarqueeTextWidget from 'svelte-marquee-text-widget';
	import { vowelIndexes, wordfucker } from '../lib/random/strings.js';

	const topic = [
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

	let marqueePause = false;
</script>

<header>
	<nav class="w-full space-x-2 mx-auto font-mono font-semibold">
		<a href=".">home</a>
		<a href="example-markdown">blog</a>
		<h1 class="sr-only">{company}</h1>
		<h1 class="text-8xl inline font-mirage">{brand}</h1>
		<span>an unorthodox digital agency</span>
	</nav>

	<ul
		class="text-gray-100 bg-black py-1 transition-all duration-400 ease-in-out ring-transparent ring-2"
		class:text-gray-900={marqueePause}
		class:bg-yellow-50={marqueePause}
		class:ring-yellow-400={marqueePause}
		on:mouseenter={() => (marqueePause = true)}
		on:mouseleave={() => (marqueePause = false)}
	>
		<MarqueeTextWidget duration={9} repeat={4} paused={marqueePause}>
			{#each topic as attribute}
				<li
					class="inline mx-1 font-bold tracking-tight font-mono hover:text-indigo-600 hover:px-4 hover:bg-gray-100 rounded-sm transition-all duration-400 ease-in-out cursor-help"
					class:italic={marqueePause}
				>
					{attribute}
				</li>
			{/each}
		</MarqueeTextWidget>
	</ul>
</header>
<slot />
