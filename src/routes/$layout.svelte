<script>
	import '../global.css';
	import MarqueeTextWidget from 'svelte-marquee-text-widget';

	let topic = [
		'brand awareness',
		'digital marketing',
		'product launches',
		'creative imagery',
		'experience design',
		'music videos',
		'web presence',
		'social campaigns',
	];
</script>

<header>
	<nav class="w-full space-x-2 mx-auto font-mono font-semibold">
		<a href=".">home</a>
		<a href="example-markdown">blog</a>
		<h1 class="text-9xl inline font-mirage">Karma Lies</h1>
		<span>an unorthodox digital agency</span>
	</nav>

	<ul class="text-gray-100 bg-black py-1">
		<MarqueeTextWidget repeat={4}>
			{#each topic as attribute}
				<li class="inline mx-2 font-mono font-bold text-xl">
					{attribute}
				</li>
			{/each}
		</MarqueeTextWidget>
	</ul>
</header>
<slot />
