<script>
	export let status;
	export let error;
</script>

<svelte:head>
	<title>Karma Lies</title>
	<meta name="description" content="An unorthodox digital brand agency" />
	<meta property="og:title" content="Karma Lies" />
	<meta property="og:description" content="An unorthodox digital brand agency" />
</svelte:head>

<section class="m-auto">
	<h1
		class="bg-gray-300 max-w-max m-auto py-1 px-3 rounded shadow-inner cursor-not-allowed text-center text-4xl md:text-5xl tracking-tighter font-mirage"
	>
		{status}
	</h1>
	<p class="text-center tracking-wider font-mono my-2 animate-pulse">{error.message}</p>
</section>
