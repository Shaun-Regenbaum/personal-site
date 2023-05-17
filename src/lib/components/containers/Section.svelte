<section class="relative flex flex-col bg-slate-100 bg-opacity-70 rounded-lg pb-3 mt-5">
	<div class="h-5 bg-white px-4 rounded-t-lg">
		<button
			class="flex flex-row w-full"
			on:click={() => {
				minimized = !minimized;
			}}
			><div class="h-4 w-4 -ml-3 stroke-slate-500 mt-0.5">
				{#if minimized}
					<MaximizeIcon />
				{:else}
					<MinimizeIcon />
				{/if}
			</div>
			<span class="text-xs text-slate-500 mt-0.5 pl-1 font-bold">Who Am I?</span>
		</button>
	</div>
	{#if !minimized}
		<div class="px-8 py-4 space-y-4">
			<h3>
				I am a <span class="font-aorell text-3xl align-bottom">Jew.</span>
			</h3>
			<h3>
				I am an <span class="font-threeam text-3xl">engineer.</span>
			</h3>
			<h3>
				I am a <span class="font-science text-3xl">researcher.</span>
			</h3>
		</div>
	{/if}
	<ComponentBackground />
</section>
