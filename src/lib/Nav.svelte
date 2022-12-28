<script lang="ts">
	interface MenuItem {
		name: string;
		href: string;
		index: number;
	}

	const items: MenuItem[] = [
		{ name: 'About Me', href: '/', index: 1 },
		{ name: 'Writings', href: '/', index: 2 },
		{ name: 'Projects', href: '/', index: 3 }
	];

	export let selected = 1;
	export let menuShow = false;

	const unselectedStyle =
		'text-md border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium';
	const selectedStyle =
		'text-md text-white border-white text-black-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium ';
</script>

<nav class="font-pixel bg-gray-800 pb-2">
	<div class="mx-auto max-w-7xl px-2">
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<button
					type="button"
					on:click={() => {
						menuShow = !menuShow;
					}}
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>

					<svg
						class="block h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
				<h1 class="pl-2 text-white">{' ' + items[selected - 1].name}</h1>
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex flex-wrap space-x-4">
						{#each items as item}
							<a
								href={item.href}
								on:click={() => {
									selected = item.index;
								}}
								class={(item.index == selected ? selectedStyle : unselectedStyle) +
									' ' +
									'px-3 py-2 text-lg font-medium'}
								aria-current={item.index == selected ? 'true' : 'false'}>{item.name}</a
							>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="sm:hidden" id="mobile-menu" hidden={!menuShow}>
		<div class="space-y-1 px-2 pt-2 pb-3 font-coolvetica">
			{#each items as item}
				<a
					href={item.href}
					on:click={() => {
						selected = item.index;
					}}
					class={(item.index == selected ? selectedStyle : unselectedStyle) +
						' ' +
						'block px-3 py-2 text-xl font-medium'}
					aria-current={item.index == selected ? 'true' : 'false'}>{item.name}</a
				>
			{/each}
		</div>
	</div>
</nav>
