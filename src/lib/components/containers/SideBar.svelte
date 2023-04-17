<script lang="ts">
	import MinimizeIcon from '$lib/components/icons/MinimizeIcon.svelte';
	import MaximizeIcon from '$lib/components/icons/MaximizeIcon.svelte';
	import ComponentBackground from './ComponentBackground.svelte';

	let minimized = false;
</script>

<div class="sidebar bg-white bg-opacity-90 z-50 rounded-l-sm flex flex-row">
	<button
		on:click={() => {
			minimized = !minimized;
		}}
		class="flex flex-col h-screen border-r-2 border-slate-400 border-opacity-70"
	>
		<div class="px-1 rounded-t-lg">
			<button class="h-4 w-4 stroke-slate-500">
				{#if minimized}
					<MaximizeIcon />
				{:else}
					<MinimizeIcon />
				{/if}
			</button>
		</div>
	</button>
	<div class="flex flex-col">
		{#if !minimized}
			<ul class="px-2 spacing-y-2 font-serif">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/writings">Blog</a>
				</li>
				<li>
					<a href="/projects">Projects</a>
				</li>
			</ul>
		{/if}
	</div>
	<ComponentBackground />
</div>

<style>
	.sidebar {
		position: fixed;
		top: 0;
		right: 0;

		height: 100vh;

		border-left: 1px solid #e0e0e0; /* Adjust the border color as needed */
		overflow-y: auto;
	}
</style>
