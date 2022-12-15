<script lang>
	const MenuItems = [
		{ name: 'About Me', href: '/', index: 1 },
		{ name: 'Writings', href: '/', index: 2 },
		{ name: 'Projects', href: '/', index: 3 }
	];

	const falseCss =
		'text-md border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium';
	const trueCss =
		'text-md border-white text-black-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium ';

	export let startIndex = 1;
	$: selected = startIndex;
</script>

<div class="font-pixel bg-gray-800 text-white">
	<div class="sm:hidden">
		<label for="tabs" class="sr-only"> Select a tab </label>
		<select
			id="tabs"
			name="tabs"
			class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
			on:change={(e) => {
				() => {
					selected = e.currentTarget.selectedIndex;
				};
			}}
		>
			{#each MenuItems as item}
				<option class="font-coolvetica">{item.name}</option>
			{/each}
		</select>
	</div>
	<div class="hidden sm:block">
		<div class="border-b border-gray-200">
			<nav class="-mb-px ml-4 flex space-x-8" aria-label="Tabs">
				{#each MenuItems as item}
					<a
						href={item.href}
						class={selected === item.index ? trueCss : falseCss}
						on:click={() => (selected = item.index)}
					>
						{item.name}
					</a>
				{/each}
			</nav>
		</div>
	</div>
</div>
