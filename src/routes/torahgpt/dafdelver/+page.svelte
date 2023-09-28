<script lang="ts">
	let awaitedAnswer: any;
	let chosenWord: string;
	$: selected = 0;
	let loading = false;
	let side: string = 'b';
	let page: number = 6;
	let masechet: string = 'Yevamot';

	export let form: any;
	$: hebrew = form ? form.he : [];
	$: text = form ? form.text : [];

	async function getTranslation() {
		loading = true;
		return fetch('/translation', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				aramaic: hebrew[selected],
				english: text[selected],
				word: chosenWord
			})
		})
			.then(async (response) => {
				const result = response.text();
				awaitedAnswer = (await result).slice(1, -1);
				loading = false;
				return awaitedAnswer;
			})
			.catch(() => {
				loading = false;
				throw new Error(chosenWord);
			});
	}
</script>

<div class="font-light overflow-hidden bg-white divide-y divide-gray-300 rounded-md bg-opacity-90">
	<div class="p-4 sm:px-6">
		<h1 class="text-3xl leading-6 text-gray-900">
			This is a <span class="font-bold">demo</span>.
		</h1>

		<div class="w-fit h-fit mt-4 p-2  bg-gray-100 rounded-lg shadow-sm border-gray-300 border">
			<p class="ml-4 text-sm max-w-sm font-medium text-gray-700">
				There are bound to be errors in the translations.
			</p>
			<div class="w-fit h-fit ml-3 my-3 py-1 px-2 rounded-xl bg-green-400 shadow-sm">
				<p class="text-xs text-gray-800">
					The current tested accuracy is <span class="text-green-800">relatively high</span>
				</p>
			</div>
			<p class="ml-4 mb-3 text-sm max-w-sm font-medium text-gray-700">
				I am actively, as of Jan. 2023, working on improving the results.
			</p>
			<p class="ml-4 mb-3 text-sm max-w-sm font-medium text-gray-700">
				The way it works is you first choose a page in the Gemarah, according to the English titles
				based on Sefaria.
			</p>
			<p class="ml-4 mb-3 text-sm max-w-sm font-medium text-gray-700">
				Then you click up through the sections to get to the part you want.
			</p>
			<p class="ml-4 mb-3 text-sm max-w-sm font-medium text-gray-700">
				Then click a word and push the translate button.
			</p>
			<p class="ml-4 mb-3 text-sm max-w-sm font-medium text-gray-700">
				I am planning on making this a better experience later once I polish things more.
			</p>
		</div>
	</div>

	<form method="POST" class="py-4">
		<p>Masechet:</p>
		<div class="flex">
			<input
				id="ref"
				list="ref-choice"
				name="ref"
				type="text"
				placeholder="Brachot"
				bind:value={masechet}
				class="inline w-[150px] ml-4 p-2 rounded-l-md border-gray-300 border-2 border-r-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
			/>

			<datalist id="ref-choice">
				<option value="Brachot" /><option value="Shabbat" /><option value="Eruvin" /><option
					value="Pesachim"
				/><option value="Rosh_Hashanah" /><option value="Yoma" /><option value="Sukkah" /><option
					value="Beitzah"
				/><option value="Taanit" /><option value="Megillah" /><option value="Moed_Katan" /><option
					value="Chagigah"
				/><option value="Yevamot" /><option value="Ketubot" /><option value="Nedarim" /><option
					value="Nazie"
				/><option value="Sotah" /><option value="Gittin" /><option value="Kiddushin" /><option
					value="Bava_Kamma"
				/><option value="Bava_Metzia" /><option value="Bava_Batra" /><option
					value="Sanhedrin"
				/><option value="Makkot" /><option value="Shevuot" /><option value="Avodah_Zarah" /><option
					value="Horayot"
				/><option value="Zevachim" /><option value="Menachot" /><option value="Chullin" /><option
					value="Bekhorot"
				/><option value="Arakhin" /><option value="Temurah" /><option value="Keritot" /><option
					value="Meilah"
				/><option value="Tamid" /><option value="Niddah" /></datalist
			>
			<input
				id="page"
				name="page"
				type="number"
				placeholder="3"
				bind:value={page}
				class="inline w-[70px] p-2 border-gray-300 border-2 border-x-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
			/>
			<input
				id="side"
				name="side"
				type="text"
				placeholder="a"
				bind:value={side}
				class="inline w-[70px] p-2 rounded-r-md border-gray-300 border-2 border-l-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
			/>

			<button
				class="inline ml-4 items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				>Get Text</button
			>
		</div>
	</form>
	{#each $text as line, i}
		<p class="mt-4">{line}</p>
	{/each}
</div>
