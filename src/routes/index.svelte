<svelte:head>
	<title>Karma Lies</title>
	<meta name="description" content="An unorthodox digital brand agency" />
	<meta property="og:title" content="Karma Lies" />
	<meta
		property="og:description"
		content="An unorthodox digital brand agency in Northwest Indiana"
	/>
</svelte:head>

<section class="m-auto h-full relative">
	<h1
		class="relative leading-loose tracking-tighter font-mirage z-10 text-center text-rich-black col-start-1 row-start-1 row-span-auto col-span-12 font-thin mb-4"
	>
		Work
	</h1>
	<section class="grid grid-cols-12 grid-rows-3 gap-12 h-[84rem]">
		<div
			class="row-start-1 row-span-1 col-start-2 col-span-4 filter mix-blend-difference text-white bg-black flex flex-col"
		>
			<h2 class="uppercase text-5xl md:text-7xl">Photography</h2>
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
	<section class="grid grid-cols-12 grid-rows-3 gap-12 h-[90rem] my-16">
		<div
			class="row-start-1 row-span-1 col-start-8 col-span-4 flex flex-col p-2 bg-white mt-8 outline-black z-30 items-stretch relative"
		>
			<h2 class="uppercase text-7xl tracking-tight font-medium">Graphic Design</h2>
			<p>retro-futuristic funk and brutalist rasters</p>
			<a
				href="/design"
				class="px-4 py-3 bg-rich-black text-platinum text-xl font-black font-mono hover:text-cerulean-frost motion-safe:transition-colors group"
				>consume it <span
					class="inline-block group-hover:translate-x-2 transform motion-safe:transition-transform"
					>-></span
				></a
			>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 18.5 18.5"
				fill="none"
				stroke="currentColor"
				stroke-width="0.75"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="absolute bottom-2 right-2  w-20"><path d="M18 18L6 6" /><path d="M8 18h10V8" /></svg
			>
		</div>
		<img
			src="https://media.graphcms.com/fWbPzHdlS0S3NsLdRw5B"
			class="col-start-2 row-start-1 col-span-7 outline-black z-20 shadow-xl"
			alt="Reset Presents: RESONATE"
			title="Reset Presents: RESONATE"
			loading="lazy"
		/>
		<img
			src="https://media.graphcms.com/ATZKXG5BSTaAMgyHDr74"
			class="col-start-2 row-start-1 col-span-7 outline-white transform translate-x-36 translate-y-24 scale-95 z-10 hover:z-20"
			alt="Reset Presents: RENEW"
			title="Reset Presents: RENEW"
			loading="lazy"
		/>
		<img
			src="https://media.graphcms.com/MPYlO7BQZaOwV2qGKYzw"
			class="col-start-2 row-start-1 col-span-7 outline-white transform translate-x-72 translate-y-48 scale-90 hover:z-20"
			alt="Reset Presents: RELOADED"
			title="Reset Presents: RELOADED"
			loading="lazy"
		/>
	</section>
	<section class="grid grid-cols-1 grid-rows-1 place-items-center">
		<div class="text-white m-auto flex flex-col col-start-1 row-start-1 z-10 space-y-4">
			<h2 class="uppercase text-[10vw] font-bold font-mono text-left leading-[7vw]">
				Web<br /> Development
			</h2>
			<p>building for tomorrow's web</p>
			<a
				href="/websites"
				class="px-4 py-3 bg-rich-black text-white border-2 border-white text-xl font-black font-mono hover:bg-sunglow hover:text-black motion-safe:transition-colors group"
				>inspect it <span
					class="inline-block group-hover:translate-x-2 transform motion-safe:transition-transform"
					>-></span
				></a
			>
		</div>
		<img
			src="/photography/portraiture/Julianna/Julianna on the ground v contrasty.jpg"
			class="col-start-1 row-start-1 outline-black"
			alt="Julianna Deatherage in Milwaukee"
			title="Julianna Deatherage in Milwaukee"
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
