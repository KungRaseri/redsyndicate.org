<script lang="ts">
	let email = $state('');
	let message = $state('');

	function handleSubmit(e: Event) {
		e.preventDefault();
		console.log('Contact form submitted:', { email, message });
		// Add actual form submission logic here
	}
</script>

<div class="card preset-tonal-surface p-6 max-w-md mx-auto space-y-4">
	<h3 class="text-2xl font-bold text-surface-900 dark:text-surface-100">Get in Touch</h3>

	<form onsubmit={handleSubmit} class="space-y-4">
		<label class="label">
			<span class="text-surface-700 dark:text-surface-300">Email</span>
			<input
				type="email"
				class="input"
				placeholder="you@example.com"
				bind:value={email}
				required
			/>
		</label>

		<label class="label">
			<span class="text-surface-700 dark:text-surface-300">Message</span>
			<textarea
				class="textarea"
				placeholder="Tell us about your project..."
				bind:value={message}
				rows="4"
				required
			></textarea>
		</label>

		<button type="submit" class="btn preset-filled-primary flex items-center gap-2 w-full">
			<span>📧</span>
			<span>Send Message</span>
		</button>
	</form>
</div>
