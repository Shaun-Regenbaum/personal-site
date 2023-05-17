<script lang="ts">
	import MinimizeIcon from '$lib/components/icons/MinimizeIcon.svelte';
	import MaximizeIcon from '$lib/components/icons/MaximizeIcon.svelte';
	import ComponentBackground from './ComponentBackground.svelte';

	let minimized = true;
</script>

<div class="sidebar bg-white bg-opacity-100 z-50 rounded-r-sm flex flex-row">
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
			<ul class="px-2 mr-8 sm:mr-4 spacing-y-2 font-serif">
				<li>
					<a
						href="/"
						on:click={() => {
							minimized = !minimized;
						}}>Home</a
					>
				</li>
				<li>
					<a
						href="/about"
						on:click={() => {
							minimized = !minimized;
						}}>About</a
					>
				</li>
				<li>
					<a
						href="/writings"
						on:click={() => {
							minimized = !minimized;
						}}>Blog</a
					>
				</li>
				<li>
					<a
						href="/projects"
						on:click={() => {
							minimized = !minimized;
						}}>Projects</a
					>
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
		left: 0;

		height: 100vh;

		border-left: 1px solid #e0e0e0; /* Adjust the border color as needed */
		overflow-y: auto;
	}
</style>
