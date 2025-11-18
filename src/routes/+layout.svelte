<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import LightSwitch from '$lib/components/LightSwitch.svelte';
	import '../app.css';

	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	// Initialize dark mode from localStorage
	onMount(() => {
		if (browser) {
			const mode = localStorage.getItem('mode') || 'light';
			document.documentElement.setAttribute('data-mode', mode);
		}
	});
</script>

<div class="flex flex-col h-full">
	<AppBar class="bg-surface-50 dark:bg-surface-900 border-b border-surface-200 dark:border-surface-700">
		<AppBar.Toolbar class="container mx-auto grid grid-cols-[auto_1fr_auto] gap-4 items-center p-4">
			<AppBar.Lead>
				<a href="/" class="text-xl font-bold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
					Red Syndicate
				</a>
			</AppBar.Lead>
			<AppBar.Headline class="flex justify-center">
				<nav class="flex gap-2">
					<a href="/" class="px-4 py-2 rounded-token text-surface-900 dark:text-surface-100 hover:preset-tonal transition-colors">
						Home
					</a>
				</nav>
			</AppBar.Headline>
			<AppBar.Trail>
				<LightSwitch />
			</AppBar.Trail>
		</AppBar.Toolbar>
	</AppBar>

	<main class="flex-1 overflow-y-auto">
		{@render children()}
	</main>

	<footer class="w-full bg-surface-100 dark:bg-surface-900 border-t border-surface-300 dark:border-surface-700 p-4">
		<div class="container mx-auto text-center text-sm text-surface-700 dark:text-surface-300">
			<p>&copy; {new Date().getFullYear()} Red Syndicate. All rights reserved.</p>
		</div>
	</footer>
</div>

