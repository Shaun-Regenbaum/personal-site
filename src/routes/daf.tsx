import dafRenderer from 'daf-renderer';
import { createEffect, createSignal, Show } from 'solid-js';
import { createRouteData, useRouteData } from 'solid-start';
import Dropdown from '~/components/Dropdown';

type Daf = { main: string; rashi: string; tosafot: string };

// TODO: to make stuff selectable we need to parse the html better and split everything up into lines so that there is no blocky behaviour.
export function routeData() {
	return createRouteData(async () => {
		//how to use a local url
		const response = await fetch('http://127.0.0.1:3000/api/getSample');
		return (await response.json()) as Daf;
	});
}
export default function Daf() {
	const data = useRouteData<typeof routeData>();
	const [loading, setLoading] = createSignal(true);

	createEffect(() => {
		const renderer = dafRenderer('#daf-container', {
			contentWidth: '600px',
			fontSize: {
				side: '10.5px',
			},
			padding: {
				vertical: '10px',
			},
			lineHeight: {
				main: '16px',
			},
			mainWidth: '42%',
			lineBreaks: 'br',
		});
		setTimeout(function () {
			renderer.render(data().main, data().rashi, data().tosafot, 'b');
		}, 100);
		setLoading(false);
	});

	return (
		<main class='mx-auto text-gray-700 p-4'>
			<h1>Daf</h1>
			<Dropdown></Dropdown>
			<div class='hidden'>{JSON.stringify(data())}</div>
			<Show when={loading()}>
				<p>Loading...</p>
			</Show>
			<div class='pl-50 w-[660px]'>
				<div
					class='select-auto block'
					id='daf-container'
				></div>
			</div>
		</main>
	);
}
