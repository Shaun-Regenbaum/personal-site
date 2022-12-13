import { createSignal, For } from 'solid-js';

interface MenuItem {
	name: string;
	href: string;
	index: number;
}
export default function Nav() {
	const [selected, setSelected] = createSignal(1);
	const MenuItems: MenuItem[] = [
		{ name: 'About Me', href: '/', index: 1 },
		{ name: 'Writings', href: '/writings', index: 2 },
		{ name: 'Projects', href: '/projects', index: 3 },
	];

	const falseCss =
		'font-coolvetica text-md border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium';
	const trueCss =
		'font-coolvetica text-md border-indigo-500 text-black-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium ';

	return (
		<div>
			<div class='sm:hidden'>
				<label
					for='tabs'
					class='sr-only'
				>
					Select a tab
				</label>
				<select
					id='tabs'
					name='tabs'
					class='block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
					onChange={(e) => {
						setSelected(e.currentTarget.selectedIndex);
						// i want to push to route from here... TODO
					}}
				>
					<For
						each={MenuItems}
						fallback={<div>Empty</div>}
					>
						{(item) => <option class='font-coolvetica'>{item.name}</option>}
					</For>
				</select>
			</div>
			<div class='hidden sm:block'>
				<div class='border-b border-gray-200'>
					<nav
						class='-mb-px ml-4 flex space-x-8'
						aria-label='Tabs'
					>
						<For
							each={MenuItems}
							fallback={<div>Empty</div>}
						>
							{(item) => (
								<a
									href={item.href}
									class={selected() === item.index ? trueCss : falseCss}
									onClick={() => setSelected(item.index)}
								>
									{item.name}
								</a>
							)}
						</For>
					</nav>
				</div>
			</div>
		</div>
	);
}
