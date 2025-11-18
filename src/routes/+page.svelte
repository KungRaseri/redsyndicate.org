<script lang="ts">
	import { CodeXml, Globe, CheckCircle, Lightbulb, Mail, Zap, Users, Award } from 'lucide-svelte';

	const services = [
		{
			name: 'Software Development',
			description: 'Custom software solutions tailored to your needs',
			icon: CodeXml
		},
		{
			name: 'Website Development',
			description: 'Modern, responsive websites built with the latest technologies',
			icon: Globe
		},
		{
			name: 'Testing & QA',
			description: 'Comprehensive testing to ensure quality and reliability',
			icon: CheckCircle
		},
		{
			name: 'Consulting',
			description: 'Expert advice on technology strategy and implementation',
			icon: Lightbulb
		}
	];

	const features = [
		{
			icon: Zap,
			title: 'Fast Delivery',
			description: 'Quick turnaround without compromising quality'
		},
		{
			icon: Users,
			title: 'Expert Team',
			description: 'Experienced professionals dedicated to your success'
		},
		{
			icon: Award,
			title: 'Quality Assured',
			description: 'Rigorous testing and quality control processes'
		}
	];
</script>

<div class="w-full">
	<!-- Hero Section -->
	<section class="relative bg-linear-to-br from-primary-500/10 via-secondary-500/5 to-tertiary-500/10 dark:from-primary-500/20 dark:via-secondary-500/10 dark:to-tertiary-500/20">
		<div class="container mx-auto px-4 py-24 md:py-32">
			<div class="max-w-4xl mx-auto text-center space-y-6">
				<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold">
					<span class="bg-linear-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
						Software & Website
					</span>
					<br />
					<span class="text-surface-900 dark:text-surface-50">Development</span>
				</h1>
				<p class="text-xl md:text-2xl text-surface-700 dark:text-surface-300 max-w-2xl mx-auto">
					Professional development services for modern businesses. 
					We build solutions that drive results.
				</p>
				<div class="flex flex-wrap gap-4 justify-center pt-4">
					<button class="btn preset-filled-primary btn-lg flex items-center gap-2">
						<Mail class="size-5" />
						<span>Get Started</span>
					</button>
					<a href="#services" class="btn preset-outlined-primary btn-lg">
						View Services
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section class="bg-surface-50 dark:bg-surface-900/50 py-16">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
				{#each features as feature}
					<div class="text-center space-y-3">
						<div class="inline-flex items-center justify-center w-16 h-16 rounded-full preset-filled-primary-500">
							<feature.icon class="size-8 text-white" />
						</div>
						<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100">
							{feature.title}
						</h3>
						<p class="text-surface-600 dark:text-surface-400">
							{feature.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Services Section -->
	<section id="services" class="container mx-auto px-4 py-20">
		<div class="text-center space-y-4 mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-surface-900 dark:text-surface-100">
				Our Services
			</h2>
			<p class="text-lg text-surface-700 dark:text-surface-300 max-w-2xl mx-auto">
				Comprehensive solutions to meet all your development needs
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
			{#each services as service}
				<div class="card preset-outlined-surface-200-800 hover:preset-tonal-primary p-8 space-y-4 transition-all duration-300 group cursor-pointer">
					<div class="flex items-start gap-4">
						<div class="p-3 rounded-lg preset-filled-primary-500 group-hover:scale-110 transition-transform duration-300">
							<service.icon class="size-8 text-white" />
						</div>
						<div class="flex-1 space-y-2">
							<h3 class="text-2xl font-semibold text-surface-900 dark:text-surface-100">
								{service.name}
							</h3>
							<p class="text-surface-700 dark:text-surface-300 leading-relaxed">
								{service.description}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- CTA Section -->
	<section class="bg-linear-to-r from-primary-500 to-secondary-500 py-20">
		<div class="container mx-auto px-4">
			<div class="max-w-3xl mx-auto text-center space-y-6">
				<h2 class="text-3xl md:text-4xl font-bold text-white">
					Ready to Start Your Project?
				</h2>
				<p class="text-xl text-primary-50">
					Let's discuss how we can help bring your vision to life. 
					Get in touch for a free consultation.
				</p>
				<button class="btn preset-filled bg-white text-primary-500 hover:bg-primary-50 btn-lg flex items-center gap-2 mx-auto">
					<Mail class="size-5" />
					<span>Contact Us Today</span>
				</button>
			</div>
		</div>
	</section>
</div>
