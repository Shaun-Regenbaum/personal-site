<script lang="ts">
	// @ts-ignore
	import dafRenderer from 'daf-renderer';
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data: { main: string; rashi: string; tosafot: string };

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
		'niddah'
	];

	const options = {
		contentWidth: '400px',
		fontSize: {
			side: '10.5px'
		},
		padding: {
			vertical: '10px'
		},
		lineHeight: {
			main: '16px'
		},
		mainWidth: '42%',
		lineBreaks: 'br'
	};
	onMount(async () => {
		const renderer = dafRenderer('#daf-container', options);
		// When you have complex inputs such as above, you may have to put the render function in a timeout as Chromium struggles to provide the inputs fast enough. What this is doing is essentially giving Chrome an extra 10 millisenconds to process the inputs.
		renderer.render(data.main, data.rashi, data.tosafot, 'b');
	});
</script>

<main class="mx-auto text-gray-700 p-4">
	<h1>Daf</h1>
	<div class="pl-50 w-[660px]">
		<div class="select-auto block" id="daf-container" />
	</div>
</main>
