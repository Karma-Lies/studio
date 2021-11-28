<script>
	import { createEventDispatcher } from 'svelte';

	export let menuOpen = false;

	const dispatch = createEventDispatcher();

	const close = () => {
		dispatch('close');
	};
</script>

<nav
	aria-label="primary"
	class="fixed h-screen inset-0 w-full bg-platinum z-50 text-platinum"
	class:hidden={!menuOpen}
>
	<ul class="p-8 absolute inset-4 bg-rich-black text-8xl space-y-4 font-mono uppercase">
		<button
			class="top-2 left-2 hover:bg-platinum hover:text-rich-black"
			aria-label="close menu"
			title="close menu"
			on:click={close}
			><svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="w-24 text-current"
				><path d="M2 10s3.5 4 10 4 10-4 10-4" /><path d="M4 11.645L2 14" /><path
					d="M22 14l-1.996-2.352"
				/><path d="M8.914 13.68L8 16.5" /><path d="M15.063 13.688L16 16.5" /></svg
			></button
		>
		<li>
			<a sveltekit:prefetch href="/photography" class="hover:bg-vermilion" on:click={close}
				>Photography
			</a>
		</li>
		<li>
			<a sveltekit:prefetch href="/design" class="hover:bg-cerulean-frost" on:click={close}
				>Graphic Design</a
			>
		</li>
		<li>
			<a
				sveltekit:prefetch
				href="/websites"
				class="hover:bg-sunglow hover:text-rich-black"
				on:click={close}>Websites</a
			>
		</li>
		<li>
			<a
				sveltekit:prefetch
				href="/work-together"
				class="hover:bg-platinum hover:text-rich-black"
				on:click={close}>Let's Work Together</a
			>
		</li>
		<li>
			<a sveltekit:prefetch href="/contact" class="hover:bg-vermilion" on:click={close}>Contact</a>
		</li>
	</ul>
</nav>
