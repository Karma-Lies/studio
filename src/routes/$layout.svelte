<script>
	import '../global.css';
	import MarqueeTextWidget from 'svelte-marquee-text-widget';
	import { vowelIndexes, wordfucker } from '../lib/random/strings.js';
	// import Blob_1 from '../svg/blob_1.svelte';
	// import Blob_3 from '../svg/blob_3.svelte';

	// Funky branding in the header
	const company = 'Karma Lies';
	const vowels = vowelIndexes(company);
	$: brand = company;
	setInterval(() => (brand = wordfucker(company, brand, vowels)), 150);

	// Marquee configuration
	let marqueePause = false;
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
</script>

<div class="min-h-screen flex flex-col bg-purple-300">
	<!-- <div class="absolute flex left-0 right-0 top-0 z-0 filter blur-3xl">
		<div class="w-1/2">
			<Blob_1 />
		</div>
		<div class="w-4/6 transform rotate-45 translate-y-2">
			<Blob_3 />
		</div>
	</div> -->
	<header class="relative z-10">
		<nav class="w-full space-x-2 mx-auto font-mono font-semibold">
			<a class="filter transition-all duration-500" class:blur-3xl={marqueePause} href=".">home</a>
			<a class="filter transition-all duration-700" class:blur-3xl={marqueePause} href="/">secret</a
			>
			<h1 class="sr-only">{company}</h1>
			<h1 class="text-8xl inline font-mirage">{brand}</h1>
			<span class="filter transition-all duration-1000" class:blur-3xl={marqueePause}
				>an unorthodox digital agency</span
			>
		</nav>

		<ul
			class="text-gray-100 bg-black py-1 transition-all duration-400 ease-in-out ring-transparent ring-2"
			class:text-gray-900={marqueePause}
			class:bg-yellow-50={marqueePause}
			class:ring-yellow-400={marqueePause}
			on:mouseenter={() => (marqueePause = true)}
			on:mouseleave={() => (marqueePause = false)}
		>
			<MarqueeTextWidget duration={9} repeat={4} class="mx-4">
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
	<main class="w-full flex-1 flex">
		<slot />
	</main>
</div>
