<script>
	import '../global.css';
	import { vowelIndexes, wordfucker } from '$lib/random/strings.js';

	// Components
	import Marquee from 'svelte-marquee-text-widget';
	import Footer from '$lib/components/03_modules/Footer.svelte';
	import CursorFriend from './../lib/components/01_atoms/CursorFriend.svelte';

	// Funky branding in the header
	const company = 'Karma Lies';
	const vowels = vowelIndexes(company);
	$: brand = company;
	setInterval(() => (brand = wordfucker(company, brand, vowels)), 150);

	// Marquee configuration
	const topic = [
		'branding',
		'progressive marketing',
		'product design',
		'visual identity',
		'web presence',
		'experimentation',
		'photography',
		'graphic design',
	];
</script>

<div class="min-h-screen flex flex-col bg-platinum text-rich-black selection:bg-sunglow">
	<!-- Site branding/nav -->
	<header class="relative z-10">
		<nav aria-label="Primary" class="w-full mx-auto font-mono font-semibold xl:px-4 md:px-2 px-0.5">
			<button
				class="text-lg font-bold bonk hover:bg-sunglow focus:bg-sunglow rounded-sm transition-colors"
				>menu</button
			>
			<h1
				class="md:text-8xl text-4xl inline-block font-mirage mx-2 hover:translate-y-1.5 hover:scale-[.99] transition-transform"
			>
				<a href="/" aria-label="Click to visit the home page.">{brand}</a>
			</h1>
			<span>an unorthodox digital agency</span>
		</nav>

		<!-- Marquee -->
		<ul
			class="text-gray-100 bg-rich-black selection:text-rich-black py-3 transition-all duration-400 ease-in-out ring-transparent ring-2"
		>
			<Marquee duration={16} repeat={4} class="mx-4">
				{#each topic as attribute}
					<li
						class="inline mx-6 font-bold tracking-tight font-mono rounded-sm transition-all duration-400 ease-in-out cursor-default"
					>
						{attribute}
					</li>
				{/each}
			</Marquee>
		</ul>
	</header>
	<main id="main-content" class="flex-1">
		<slot />
	</main>
	<Footer />
</div>
<CursorFriend />

<style lang="postcss">
	.bonk::after {
		content: '';
		@apply w-full h-1 mx-auto mt-1 block;
		@apply bg-vermilion rounded-sm;
		@apply scale-x-0 translate-y-1;
	}
	.bonk:hover::after {
		@apply scale-x-100 translate-y-0 duration-200 transition-transform;
	}
</style>
