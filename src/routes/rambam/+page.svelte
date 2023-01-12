<script lang="ts">
	import WordSelect from '$lib/components/WordSelect.svelte';
	let awaitedAnswer: any;
	let awaitedAnswer2: any;
	let chosenWord: string;
	$: selected = 0;
	let loading = false;
	let page: string = 'Reading the Shema';

	export let form: any;
	$: hebrew = form ? form.he : [];
	$: text = form ? form.text : [];

	async function getTranslation() {
		loading = true;
		return fetch('/rambam', {
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

<div class="font-light overflow-hidden bg-white divide-y divide-gray-300 ">
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
					The current tested accuracy is <span class="text-green-700">extremely high</span>
				</p>
			</div>
			<p class="ml-4 mb-3 text-sm max-w-sm font-medium text-gray-700">
				I am actively, as of Jan. 2023, working on improving the results.
			</p>
			<p class="ml-4 mb-3 text-sm max-w-sm font-medium text-gray-700">
				The way it works is you first choose a section of the Mishneh Torah, according to the
				English titles in Sefaria.
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
		<p>Section:</p>
		<p class="text-xs">Example: Reading the Shema</p>
		<div class="flex">
			<input
				id="page"
				name="page"
				type="text"
				placeholder="Reading the Shema"
				bind:value={page}
				class="inline ml-4 w-[170px] p-2 border-gray-300 border-2 border-x-1 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
			/>

			<button
				class="inline ml-4 items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				>Get Text</button
			>
		</div>
	</form>

	<div class="py-4">
		<p>Choose a Section:</p>
		<input
			type="number"
			class="inline-block w-[300px] ml-4 p-2 rounded-md border-gray-300 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
			max={form ? form.text.length : 1}
			bind:value={selected}
		/>
	</div>

	<WordSelect sentences={hebrew} bind:word={chosenWord} bind:selected />

	<button
		on:click={() => {
			getTranslation();
		}}
		class="inline-block mx-12 items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
	>
		Translate</button
	>

	{#if loading}
		<div class="w-fit bg-gray-200 border-black border-2 rounded mx-12 mt-12 p-4">
			<p>Loading...</p>
		</div>
	{:else if awaitedAnswer}
		<div class="w-fit bg-gray-200 border-black border-2 rounded mx-12 mt-12 p-4">
			<p>{awaitedAnswer}</p>
		</div>
	{/if}

	<!-- <br />
<div class="w-fit bg-gray-200 border-black border-2 rounded mx-12 mt-12 p-4">
	<p>Is there Rashi?</p>
	{#if awaitedAnswer2}
		{#if loading}
			<p>Loading...</p>
		{:else if awaitedAnswer2.he}
			<p>{awaitedAnswer2.he}</p>
		{:else}
			<p>No</p>
		{/if}
	{:else}
		<p>No</p>
	{/if}
</div> -->
</div>
