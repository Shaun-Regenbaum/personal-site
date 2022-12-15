import dafRenderer from 'daf-renderer';
import { createEffect, createSignal, Resource, Show } from 'solid-js';

import { createRouteData, useRouteData, useSearchParams } from 'solid-start';
import Dropdown from '~/components/Dropdown';

type Daf = { main: string; rashi: string; tosafot: string };
// TODO: to make stuff selectable we need to parse the html better and split everything up into lines so that there is no blocky behaviour.
export function routeData() {
	return createRouteData(async () => {
		const [searchParams] = useSearchParams();
		const masechta = searchParams.masechta;
		//how to use a local url
		const response = await fetch(
			`http://127.0.0.1:3000/api/getSample?masechta=${masechta}&daf=1`
		);
		return (await response.json()) as Daf;
	});
}
export default function Daf() {
	let data = useRouteData<() => Resource<Daf>>();

	const [loading, setLoading] = createSignal(true);
	const [searchParams, setSearchParams] = useSearchParams();
	const [masechta, setMasechta] = createSignal(searchParams.masechta);
	const [rashi, setRashi] = createSignal('');
	const [tosafot, setTos] = createSignal('');
	const [main, setMain] = createSignal('');
	const masechtot = [
		'Brachot',
		'Shabbat',
		'Eruvin',
		'Pesachim',
		'Shekalim',
		'Yoma',
		'Sukkah',
		'Beitzah',
		'RoshHashana',
		'Taanit',
		'megillah',
		'moed katan',
		'chagigah',
		'yevamot',
		'ketubot',
		'nedarim',
		'nazir',
		'sotah',
		'gitin',
		'kidushin',
		'bava kamma',
		'bava metzia',
		'bava batra',
		'sanhedrin',
		'makkot',
		'shevuot',
		'avodah zarah',
		'horayot',
		'zevachim',
		'menachot',
		'chullin',
		'bechorot',
		'arachin',
		'temurah',
		'keritot',
		'meilah',
		'tamid',
		'middot',
		'kinot',
		'niddah',
	];

	const newData = async (masechta: string) => {
		const response = await fetch(
			`http://127.0.0.1:3000/api/getDaf?masechta=${masechta}&daf=1`
		);
		setSearchParams({ masechta: masechta });
		const newD = (await response.json()) as Daf;
		setRashi(newD.rashi);
		setTos(newD.tosafot);
		setMain(newD.main);
	};

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
		setMain(data().main);
		setRashi(data().rashi);
		setTos(data().tosafot);

		setTimeout(function () {
			renderer.render(main(), rashi(), tosafot(), 'b');
		}, 100);
		setLoading(false);
	});

	return (
		<main class='mx-auto text-gray-700 p-4'>
			<h1>Daf</h1>
			<form class='flex'>
				<Dropdown
					options={masechtot}
					option={masechta}
					setOption={setMasechta}
				></Dropdown>
				<button
					type='submit'
					onClick={() => {
						setSearchParams({ masechta: masechta() });
						newData(masechta());
					}}
				>
					Get Daf
				</button>
			</form>

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
