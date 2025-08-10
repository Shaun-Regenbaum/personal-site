<script lang="ts">
	import WordSelect from '$lib/components/WordSelect.svelte';
	import MaintenanceBanner from '$lib/components/MaintenanceBanner.svelte';
	import TerminalNavigation from '$lib/components/TerminalNavigation.svelte';
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

	const isMaintenanceMode = true;
</script>

<div class="min-h-screen bg-black text-green-400 font-mono">
	<div class="h-screen flex flex-col">
		<!-- Terminal Border -->
		<div class="border-2 border-green-400 flex-grow flex flex-col">
			<!-- Terminal Header -->
			<div class="flex items-center px-4 py-2 border-b border-green-400">
				<span class="text-green-300">Terminal - Rambam Translator</span>
				<span class="ml-auto text-green-300 text-xs">SHAUN-OS v1.0</span>
			</div>
			
			<!-- Terminal Content -->
			<div class="flex-grow p-6 overflow-y-auto">
				{#if isMaintenanceMode}
					<div class="mb-6 p-4 bg-yellow-900 bg-opacity-30 border border-yellow-400 rounded">
						<div class="flex items-start">
							<span class="text-yellow-400 mr-2">⚠</span>
							<div class="text-yellow-300">
								<div class="font-bold">Rambam Translator - Maintenance Mode</div>
								<div class="text-sm mt-1">Interactive features temporarily disabled. Expected restoration: Coming soon</div>
							</div>
						</div>
					</div>
				{/if}

				<!-- Command prompt -->
				<div class="mb-4">
					<span class="text-green-300">> ./rambam-translator --demo</span>
				</div>

				<!-- Demo info -->
				<div class="mb-6 text-sm text-green-300 space-y-2">
					<div># Rambam Single Word Translation Tool</div>
					<div># High accuracy Hebrew-to-English word translation for Mishneh Torah</div>
					<div># Status: Demo mode - translation accuracy extremely high</div>
				</div>

				<!-- Instructions -->
				<div class="mb-6 text-sm text-green-400 space-y-1">
					<div>USAGE INSTRUCTIONS:</div>
					<div class="ml-4">1. Choose section of Mishneh Torah (English titles)</div>
					<div class="ml-4">2. Navigate to specific subsection</div>
					<div class="ml-4">3. Select word and execute translation</div>
				</div>
				<!-- Section Input -->
				<div class="mb-4">
					<form method="POST">
						<div class="text-green-400 mb-2">SECTION:</div>
						<div class="text-xs text-green-300 mb-2">Example: Reading the Shema</div>
						<div class="flex items-center">
							<span class="text-green-300 mr-2">></span>
							<input
								id="page"
								name="page"
								type="text"
								placeholder="Reading the Shema"
								bind:value={page}
								class="bg-black border border-green-400 text-green-400 p-2 rounded font-mono focus:outline-none focus:border-green-300 {isMaintenanceMode ? 'opacity-50 cursor-not-allowed' : ''}"
								disabled={isMaintenanceMode}
							/>
							<button
								class="ml-4 px-4 py-2 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition-colors font-mono {isMaintenanceMode ? 'opacity-50 cursor-not-allowed hover:bg-transparent hover:text-green-400' : ''}"
								disabled={isMaintenanceMode}
							>
								GET TEXT
							</button>
						</div>
					</form>
				</div>

				<!-- Section Selector -->
				<div class="mb-4">
					<div class="text-green-400 mb-2">CHOOSE SUBSECTION:</div>
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

				<!-- Word Select Component (styled for terminal) -->
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
						<div class="text-green-300">Processing...</div>
					</div>
				{:else if awaitedAnswer}
					<div class="border border-green-400 rounded p-4 bg-black">
						<div class="text-green-400 mb-2">TRANSLATION RESULT:</div>
						<div class="text-green-300">{awaitedAnswer}</div>
					</div>
				{/if}

				<!-- Navigation -->
				<TerminalNavigation currentPage="rambam" />
			</div>
			
			<!-- Status Bar -->
			<div class="px-4 py-1 text-xs text-green-300 flex justify-between border-t border-green-400">
				<span>RAMBAM TRANSLATOR</span>
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
