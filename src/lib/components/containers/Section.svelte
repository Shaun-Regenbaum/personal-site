<script lang='ts'>
	import Abbr from "$lib/components/Abbr.svelte";
	import ComponentBackground from "$lib/components/containers/ComponentBackground.svelte";
	import MaximizeIcon from "$lib/components/icons/MaximizeIcon.svelte";
	import MinimizeIcon from "$lib/components/icons/MinimizeIcon.svelte";
	let minimized = false;
	export let title:string;
</script>


	<section class="relative flex flex-col pb-3 mt-5">
		<div class="h-5 border-b-2 border-l-2 border-black px-4">
			<button
				class="flex flex-row w-full"
				on:click={() => {
					minimized = !minimized;
				}}
				><div class="h-4 w-4 -ml-3 stroke-black mt-0.5">
					{#if minimized}
						<MaximizeIcon />
					{:else}
						<MinimizeIcon />
					{/if}
				</div>
				<span class="text-xs text-black mt-0.5 pl-1 font-bold">{title}</span>
			</button>
		</div>
		{#if !minimized}
			<slot/>
		{/if}
		<ComponentBackground />
	</section>

