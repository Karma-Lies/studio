<script>
	import { spring } from 'svelte/motion';

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.29,
			damping: 0.68,
		}
	);

	let size = spring(0);

	const engage = () => {
		size.set(20);
	};

	const disengage = () => {
		size.set(0);
	};
</script>

<svelte:window
	on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })}
	on:mousedown={engage}
	on:mouseup={disengage}
/>

<svg class="fixed inset-0 w-full h-full z-50 pointer-events-none">
	<clipPath id="clip">
		<circle id="circle" cx={$coords.x} cy={$coords.y} r={$size} class="undulate" />
	</clipPath>
	<filter id="funk">
		<feTurbulence type="turbulence" baseFrequency="0.005" numOctaves="8" result="turbulence" />
		<feDiffuseLighting elevation="10" result="diffuse">
			<feDistantLight azimuth="10" />
		</feDiffuseLighting>
		<feMerge>
			<feMergeNode in="diffuse" />
			<feMergeNode in="turbulence" />
		</feMerge>
	</filter>
	<g style="clip-path: url(#clip)">
		<rect fill="none" x="0" y="0" width="100%" height="100%" style="filter: url(#funk)" />
	</g>
	<use xlink:href="#circle" style="fill:none;stroke:black" />
</svg>

<style>
	@keyframes undulate {
		0% {
			transform: rotateY(0) rotateX(0);
		}
		25% {
			transform: rotateX(3deg);
		}
		50% {
			transform: rotateY(-4deg);
		}
		75% {
			transform: rotateX(-3deg);
		}
	}

	.undulate {
		animation: undulate 3s ease-in-out 300ms alternate infinite;
	}
</style>
