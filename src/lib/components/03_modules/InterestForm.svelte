<script>
	import axios from 'axios';

	// Service options
	const menu = ['Photos', 'Design', 'Web', '???'];

	// Form input data
	let name = '';
	let email = '';
	let phone = '';
	let selectedServices = [];
	let details = '';

	// Multi-step form
	const steps = ['contact info', 'project details', 'confirmation'];
	let currentStepIndex = 0;
	$: currentStep = steps[currentStepIndex];

	// Next/submission button logic
	$: buttonCTA = currentStepIndex === steps.length - 2 ? 'Submit' : 'Next';
	let submitting = Promise.resolve({});
	let isButtonDisabled = false;

	/**
	 * Conditionally progress the form to the next step.
	 * Haults progress while submitting.
	 */
	function nextStep() {
		if (currentStepIndex === steps.length - 1) return;
		else if (currentStepIndex === steps.length - 2) {
			// prevent multiple submissions
			isButtonDisabled = true;
			// submit form via serverless function
			submitting = sendMail();
			// then progress to confirmation step
			submitting.then(() => {
				currentStepIndex++;
				isButtonDisabled = false;
			});
		} else {
			currentStepIndex++;
		}
	}

	/**
	 * Go back to the previous step in the form.
	 */
	function prevStep() {
		if (currentStepIndex === 0) return;
		currentStepIndex--;
	}

	/**
	 * POST request to email data via serverless function
	 */
	async function sendMail() {
		try {
			// Call serverless function to submit contact form via email
			const response = await axios.post(`/.netlify/functions/send-mail`, {
				name,
				email,
				phone,
				selectedServices: selectedServices.join(', '),
				details,
			});
			return { data: response, error: null };
		} catch (error) {
			console.error(error);
			return { data: null, error };
		}
	}
</script>

<section
	id="interested"
	class="flex flex-col md:flex-row font-mono my-16 border-2 border-rich-black divide-y-2 md:divide-y-0 md:divide-x-2 divide-rich-black mx-8"
>
	<div class="grid place-content-center md:w-1/2 lg:w-7/12 bg-sunglow p-32">
		<h2
			class="text-left tracking-tighter xl:leading-[6rem] text-6xl lg:text-7xl xl:text-9xl font-bold font-mono"
		>
			Let's make something neat together
		</h2>
	</div>
	<form
		class="space-y-4 md:w-1/2 lg:w-5/12 p-16 grid place-content-center"
		on:submit|preventDefault={nextStep}
	>
		{#if currentStep === 'contact info'}
			<div class="text-input">
				<label for="name">Name:</label>
				<input type="text" name="name" id="name" autocomplete="name" required bind:value={name} />
			</div>
			<div class="text-input">
				<label for="email">Email:</label>
				<input
					type="email"
					name="email"
					id="email"
					autocomplete="email"
					required
					bind:value={email}
				/>
			</div>
			<div class="text-input">
				<label for="phone">Phone:</label>
				<input type="tel" name="phone" id="phone" autocomplete="tel" bind:value={phone} />
			</div>
			<div>
				<h3>I'm interested in...</h3>
				{#each menu as service}
					<div class="inline-block mr-6 mt-1">
						<label class="select-none checkbox-input !text-xl">
							<input
								type="checkbox"
								bind:group={selectedServices}
								name="services"
								value={service}
							/>
							{service}
						</label>
					</div>
				{/each}
			</div>
		{:else if currentStep === 'project details'}
			<button
				aria-label="go back"
				class="transform hover:scale-110 transition-transform max-w-max"
				on:click={prevStep}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="ai ai-ArrowLeft"><path d="M11 5l-7 7 7 7" /><path d="M4 12h16" /></svg
				>
			</button>
			<div class="text-input">
				<label for="details">What do you have in mind?</label>
				<textarea name="details" id="details" rows="5" bind:value={details} />
			</div>
		{:else}
			<h3 class="text-3xl">Thanks for reaching out!</h3>
			<p class="text-xl">We'll be in contact with you soon 🎉</p>
		{/if}
		{#if currentStep !== 'confirmation'}
			<button
				type="submit"
				disabled={isButtonDisabled}
				class="bg-rich-black text-platinum px-6 py-3 text-xl block w-full"
			>
				{#await submitting}
					Sending...
				{:then}
					{buttonCTA}
				{:catch}
					There was an error. Please try again.
				{/await}
			</button>
		{/if}
	</form>
</section>

<style lang="postcss">
	.text-input {
		@apply flex flex-col space-y-1;
	}
	label {
		@apply text-3xl font-black;
	}
	.text-input input,
	.text-input textarea {
		@apply px-2 py-1 text-2xl;
		@apply border-2 border-rich-black bg-white;
		@apply font-semibold tracking-wide;
	}
	input,
	textarea,
	button {
		@apply outline-none;
	}
	/* Have to annoyingly do this because of 'Semicolon or block is expected  ParseError' bug with linters, Tailwind, and SvelteKit battle royale */
	input:focus,
	textarea:focus,
	button:focus {
		@apply outline-black;
	}
	.checkbox-input {
		@apply flex;
	}
	input[type='checkbox'] {
		transform: translateY(-0.075em);

		@apply appearance-none m-auto mr-4;
		@apply grid place-content-center;
		@apply w-4 h-4 text-current bg-platinum;
		@apply border-2 border-current;
	}

	input[type='checkbox']::before {
		content: '';
		@apply w-2 h-2;
		@apply outline-none;
		transform: scale(0);
		transition: 50ms transform ease-in-out;

		/* Windows High Contrast Mode */
		background-color: CanvasText;
	}

	input[type='checkbox']:checked::before {
		transform: scale(1);
	}

	input[type='checkbox']:focus {
		@apply border-blue-400 outline-none;
	}
</style>
