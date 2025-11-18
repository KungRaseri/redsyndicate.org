<script lang="ts">
	const services = [
		{
			name: 'Software Development',
			description: 'Custom software solutions tailored to your needs',
			icon: '💻'
		},
		{
			name: 'Website Development',
			description: 'Modern, responsive websites built with the latest technologies',
			icon: '🌐'
		},
		{
			name: 'Testing & QA',
			description: 'Comprehensive testing to ensure quality and reliability',
			icon: '✅'
		},
		{
			name: 'Consulting',
			description: 'Expert advice on technology strategy and implementation',
			icon: '💡'
		}
	];
</script>

<div class="container mx-auto p-8 space-y-8">
	<section class="text-center space-y-4 py-12">
		<h1 class="text-5xl font-bold text-primary-500">Software and Website Development</h1>
		<p class="text-xl text-surface-700 dark:text-surface-300">
			Professional development services for modern businesses
		</p>
	</section>

	<hr class="border-surface-300 dark:border-surface-700" />

	<section class="space-y-6">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100">Our Services</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each services as service}
				<div class="card preset-tonal-surface p-6 space-y-2">
					<div class="flex items-center gap-3">
						<span class="text-4xl">{service.icon}</span>
						<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100">
							{service.name}
						</h3>
					</div>
					<p class="text-surface-700 dark:text-surface-300">
						{service.description}
					</p>
				</div>
			{/each}
		</div>
	</section>

	<hr class="border-surface-300 dark:border-surface-700" />

	<section class="space-y-4 py-8">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100">Get Started</h2>
		<p class="text-surface-700 dark:text-surface-300">
			Ready to bring your project to life? Contact us to discuss your requirements.
		</p>
		<button class="btn preset-filled-primary flex items-center gap-2">
			<span>📧</span>
			<span>Contact Us</span>
		</button>
	</section>
</div>

