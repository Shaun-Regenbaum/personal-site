<script lang="ts">
	export let expanded: boolean = true;
	export let title: string = '';
</script>

<section class="pl-12 pt-12 min-w-[390px] font-metropolis font-bold text-lg">
	<button
		on:click={() => {
			expanded = !expanded;
		}}
		class="flex space-x-2  shadow p-2 pr-6 rounded-tl-md rounded-tr-3xl font-aorell"
	>
		{#if !expanded}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
			</svg>
		{/if}
		<h1>{title}</h1>
	</button>

	<div
		hidden={!expanded}
		class=" w-fit rounded-tr-xl rounded-b-md font-bold text-sm p-6 shadow-2xl"
	>
		<slot />
	</div>
</section>
