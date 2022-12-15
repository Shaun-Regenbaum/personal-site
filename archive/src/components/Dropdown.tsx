import { Accessor, createSignal, For, JSX, Setter, Show } from 'solid-js';

export default function Dropdown({
	options,
	option,
	setOption,
}: {
	options: string[];
	option: Accessor<string>;
	setOption: Setter<string>;
}): JSX.Element {
	const [open, setOpen] = createSignal(false);
	return (
		<div class='mx-auto ml-12 relative inline-block text-left'>
			<div
				onClick={() => {
					setOpen(!open());
					console.log('open');
				}}
			>
				<button
					type='button'
					class='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50'
					id='menu-button'
					aria-expanded='true'
					aria-haspopup='true'
				>
					{option()}
					<svg
						class='-mr-1 ml-2 h-5 w-5'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
						aria-hidden='true'
					>
						<path
							fill-rule='evenodd'
							d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
							clip-rule='evenodd'
						/>
					</svg>
				</button>
			</div>
			<Show when={open()}>
				<div
					class='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
					role='menu'
					aria-orientation='vertical'
					aria-labelledby='menu-button'
					tabindex='-1'
				>
					<div
						class='py-1'
						role='none'
					>
						<For each={options}>
							{(opt) => (
								<button
									type='button'
									class='text-gray-700 block w-full px-4 py-2 text-left text-sm'
									role='menuitem'
									tabindex='-1'
									id='menu-item-0'
									onclick={() => setOption(opt)}
								>
									{opt}
								</button>
							)}
						</For>
						<form
							method='post'
							action='#'
							role='none'
						>
							<button
								type='submit'
								class='text-gray-700 block w-full px-4 py-2 text-left text-sm'
								role='menuitem'
								tabindex='-1'
								id='menu-item-3'
							>
								Sign out
							</button>
						</form>
					</div>
				</div>
			</Show>
		</div>
	);
}
