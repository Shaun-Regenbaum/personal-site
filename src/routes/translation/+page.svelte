<script lang="ts">
	import WordSelect from '$lib/components/WordSelect.svelte';
	import MaintenanceBanner from '$lib/components/MaintenanceBanner.svelte';
	import TerminalNavigation from '$lib/components/TerminalNavigation.svelte';
	let awaitedAnswer: any;
	let awaitedAnswer2: any;
	let chosenWord: string;
	$: selected = 0;
	let loading = false;
	let side: string = 'b';
	let page: number = 6;
	let masechet: string = 'Yevamot';

	export let form: any;
	$: hebrew = form ? form.he : [];
	$: text = form ? form.text : [];
	async function getRashi() {
		loading = true;
		return fetch('/translation/rashi', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				ref: masechet,
				page: page,
				side: side,
				index: selected
			})
		})
			.then(async (response) => {
				const result = response.json();
				awaitedAnswer2 = await result;
				loading = false;
				return awaitedAnswer2;
			})
			.catch(() => {
				loading = false;
				throw new Error(awaitedAnswer2);
			});
	}
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

	const isMaintenanceMode = true;
</script>

<div class="min-h-screen bg-black text-green-400 font-mono">
	<div class="h-screen flex flex-col">
		<!-- Terminal Border -->
		<div class="border-2 border-green-400 flex-grow flex flex-col">
			<!-- Terminal Header -->
			<div class="flex items-center px-4 py-2 border-b border-green-400">
				<span class="text-green-300">Terminal - Talmud Translator</span>
				<span class="ml-auto text-green-300 text-xs">SHAUN-OS v1.0</span>
			</div>
			
			<!-- Terminal Content -->
			<div class="flex-grow p-6 overflow-y-auto">
				{#if isMaintenanceMode}
					<div class="mb-6 p-4 bg-yellow-900 bg-opacity-30 border border-yellow-400 rounded">
						<div class="flex items-start">
							<span class="text-yellow-400 mr-2">⚠</span>
							<div class="text-yellow-300">
								<div class="font-bold">Talmud Translator - Maintenance Mode</div>
								<div class="text-sm mt-1">Interactive features temporarily disabled. Expected restoration: Coming soon</div>
							</div>
						</div>
					</div>
				{/if}

				<!-- Command prompt -->
				<div class="mb-4">
					<span class="text-green-300">> ./talmud-translator --demo</span>
				</div>

				<!-- Demo info -->
				<div class="mb-6 text-sm text-green-300 space-y-2">
					<div># Talmud Single Word Translation Tool</div>
					<div># 90% accuracy Hebrew/Aramaic-to-English word translation for Gemarah</div>
					<div># Status: Demo mode - accuracy relatively high</div>
				</div>

				<!-- Instructions -->
				<div class="mb-6 text-sm text-green-400 space-y-1">
					<div>USAGE INSTRUCTIONS:</div>
					<div class="ml-4">1. Choose Masechet and Daf (page/side)</div>
					<div class="ml-4">2. Navigate to specific section</div>
					<div class="ml-4">3. Select word and execute translation</div>
				</div>

				<!-- Masechet Input -->
				<div class="mb-4">
					<form method="POST">
						<div class="text-green-400 mb-2">MASECHET (TRACTATE):</div>
						<div class="flex items-center space-x-2">
							<span class="text-green-300 mr-2">></span>
							<input
								id="ref"
								list="ref-choice"
								name="ref"
								type="text"
								placeholder="Brachot"
								bind:value={masechet}
								class="bg-black border border-green-400 text-green-400 p-2 rounded font-mono w-32 focus:outline-none focus:border-green-300 {isMaintenanceMode ? 'opacity-50 cursor-not-allowed' : ''}"
								disabled={isMaintenanceMode}
							/>
							<input
								id="page"
								name="page"
								type="number"
								placeholder="6"
								bind:value={page}
								class="bg-black border border-green-400 text-green-400 p-2 rounded font-mono w-16 focus:outline-none focus:border-green-300 {isMaintenanceMode ? 'opacity-50 cursor-not-allowed' : ''}"
								disabled={isMaintenanceMode}
							/>
							<input
								id="side"
								name="side"
								type="text"
								placeholder="b"
								bind:value={side}
								class="bg-black border border-green-400 text-green-400 p-2 rounded font-mono w-12 focus:outline-none focus:border-green-300 {isMaintenanceMode ? 'opacity-50 cursor-not-allowed' : ''}"
								disabled={isMaintenanceMode}
							/>
							<button
								class="px-4 py-2 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition-colors font-mono {isMaintenanceMode ? 'opacity-50 cursor-not-allowed hover:bg-transparent hover:text-green-400' : ''}"
								disabled={isMaintenanceMode}
							>
								GET TEXT
							</button>
						</div>
						<datalist id="ref-choice">
							<option value="Brachot" /><option value="Shabbat" /><option value="Eruvin" /><option value="Pesachim" />
							<option value="Rosh_Hashanah" /><option value="Yoma" /><option value="Sukkah" /><option value="Beitzah" />
							<option value="Taanit" /><option value="Megillah" /><option value="Moed_Katan" /><option value="Chagigah" />
							<option value="Yevamot" /><option value="Ketubot" /><option value="Nedarim" /><option value="Nazir" />
							<option value="Sotah" /><option value="Gittin" /><option value="Kiddushin" /><option value="Bava_Kamma" />
							<option value="Bava_Metzia" /><option value="Bava_Batra" /><option value="Sanhedrin" /><option value="Makkot" />
							<option value="Shevuot" /><option value="Avodah_Zarah" /><option value="Horayot" /><option value="Zevachim" />
							<option value="Menachot" /><option value="Chullin" /><option value="Bekhorot" /><option value="Arakhin" />
							<option value="Temurah" /><option value="Keritot" /><option value="Meilah" /><option value="Tamid" /><option value="Niddah" />
						</datalist>
					</form>
				</div>

				<!-- Section Selector -->
				<div class="mb-4">
					<div class="text-green-400 mb-2">CHOOSE SECTION:</div>
					<div class="flex items-center">
						<span class="text-green-300 mr-2">></span>
						<input
							type="number"
							class="bg-black border border-green-400 text-green-400 p-2 rounded font-mono w-20 focus:outline-none focus:border-green-300 {isMaintenanceMode ? 'opacity-50 cursor-not-allowed' : ''}"
							max={form ? form.text.length : 1}
							bind:value={selected}
							disabled={isMaintenanceMode}
						/>
					</div>
				</div>

				<!-- Word Select Component -->
				<div class="mb-4">
					<WordSelect sentences={hebrew} bind:word={chosenWord} bind:selected />
				</div>

				<!-- Translate Button -->
				<div class="mb-4">
					<button
						on:click={() => {
							if (!isMaintenanceMode) {
								getTranslation();
							}
						}}
						class="px-6 py-2 border-2 border-green-400 text-green-400 rounded font-mono hover:bg-green-400 hover:text-black transition-colors {isMaintenanceMode ? 'opacity-50 cursor-not-allowed hover:bg-transparent hover:text-green-400' : ''}"
						disabled={isMaintenanceMode}
					>
						TRANSLATE
					</button>
				</div>

				<!-- Output -->
				{#if loading}
					<div class="border border-green-400 rounded p-4 bg-black">
						<div class="text-green-300">Processing translation...</div>
					</div>
				{:else if awaitedAnswer}
					<div class="border border-green-400 rounded p-4 bg-black">
						<div class="text-green-400 mb-2">TRANSLATION RESULT:</div>
						<div class="text-green-300">{awaitedAnswer}</div>
					</div>
				{/if}

				<!-- Navigation -->
				<TerminalNavigation currentPage="translation" />
			</div>
			
			<!-- Status Bar -->
			<div class="px-4 py-1 text-xs text-green-300 flex justify-between border-t border-green-400">
				<span>TALMUD TRANSLATOR</span>
				<span>{isMaintenanceMode ? 'MAINTENANCE' : 'READY'}</span>
				<span>{new Date().toLocaleTimeString()}</span>
			</div>
		</div>
	</div>
</div>

<style>
	/* Terminal glow effect */
	:global(.text-green-400) {
		text-shadow: 0 0 5px rgba(34, 197, 94, 0.5);
	}
	
	:global(.text-green-300) {
		text-shadow: 0 0 5px rgba(134, 239, 172, 0.5);
	}
	
	:global(.text-yellow-400) {
		text-shadow: 0 0 5px rgba(250, 204, 21, 0.5);
	}
	
	:global(.text-yellow-300) {
		text-shadow: 0 0 5px rgba(253, 224, 71, 0.5);
	}
</style>
