<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let checked = $state(false);

	onMount(() => {
		if (browser) {
			const mode = localStorage.getItem('mode') || 'light';
			checked = mode === 'dark';
		}
	});

	function onCheckedChange(event: { checked: boolean }) {
		if (!browser) return;

		const mode = event.checked ? 'dark' : 'light';
		document.documentElement.setAttribute('data-mode', mode);
		localStorage.setItem('mode', mode);
		checked = event.checked;
	}
</script>

<Switch {checked} onCheckedChange={onCheckedChange}>
	<Switch.Control>
		<Switch.Thumb>
			<Switch.Context>
				{#snippet children(api)}
					<span class="text-xs">
						{#if api().checked}
							🌙
						{:else}
							☀️
						{/if}
					</span>
				{/snippet}
			</Switch.Context>
		</Switch.Thumb>
	</Switch.Control>
</Switch>
