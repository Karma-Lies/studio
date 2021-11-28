<svelte:head>
	<title>Karma Lies</title>
	<meta name="description" content="An unorthodox digital brand agency" />
	<meta property="og:title" content="Karma Lies" />
	<meta property="og:description" content="An unorthodox digital brand agency" />
</svelte:head>

<section class="m-auto h-full relative">
	<h1
		class="relative leading-loose tracking-tighter font-mirage z-10 text-center text-black col-start-1 row-start-1 row-span-auto col-span-12 font-thin"
	>
		Work
	</h1>
	<section class="grid grid-cols-12 grid-rows-3 gap-12 h-screen">
		<div
			class="row-start-1 row-span-1 col-start-2 col-span-4 filter mix-blend-difference text-white bg-black flex flex-col"
		>
			<h2 class="uppercase text-7xl">Photography</h2>
			<p>exploring color, perspective, and hyper-realism</p>
			<a
				href="/photography"
				class="px-4 py-3 bg-white text-black text-xl font-black font-mono hover:bg-yellow-800 motion-safe:transition-colors group"
				>visualize it <span
					class="inline-block group-hover:translate-x-2 transform motion-safe:transition-transform"
					>-></span
				></a
			>
		</div>
		<img
			src="/photography/portraiture/Julianna/Julianna on the ground v contrasty.jpg"
			class="col-start-5 row-start-1 col-span-7 outline-black"
			alt="Julianna Deatherage in Milwaukee"
			title="Julianna Deatherage in Milwaukee"
		/>
		<img
			src="/photography/portraiture/Marin's Family Jewels (flipt).jpg"
			class="col-start-2 row-start-2 col-span-3 shadow-inner"
			alt="Marin in Muncie"
			title="Marin in Muncie"
		/>
		<img
			src="/photography/landscape/Beverly Shores (for Print).jpg"
			class="col-start-5 row-start-2 mt-64 col-span-5 shadow-inner"
			alt="Beverly Shores"
			title="Beverly Shores"
		/>
	</section>
</section>

<style lang="postcss">
	img {
		@apply select-none cursor-help;
	}
	h1 {
		font-size: clamp(100%, 1em + 10vw, 28rem);
	}
</style>
