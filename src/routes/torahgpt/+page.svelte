<script lang="ts">
	import Answer from '$lib/components/Answer.svelte';
	import MaintenanceBanner from '$lib/components/MaintenanceBanner.svelte';
	import TerminalNavigation from '$lib/components/TerminalNavigation.svelte';
	let text: string = '';
	let indepth: boolean = false;
	let answer: Promise<string> | undefined = undefined;
	let awaitedAnswer: string | undefined = undefined;
	let hideExamples = true;

	const onState =
		'translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out';
	const offState =
		'translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out';

	async function getCompletion() {
		console.log('asking...');
		return fetch('/torahgpt', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				question: text,
				indepth: indepth
			})
		})
			.then(async (response) => {
				const result = response.text();
				console.log(result);
				// if the first charecter is a quotation mark:
				if ((await result).charAt(0) === '"') {
					// remove the first and last charecters
					awaitedAnswer = (await result).slice(1, -1);
				} else {
					awaitedAnswer = await result;
				}
				return awaitedAnswer;
			})
			.catch(() => {
				throw new Error(text);
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
				<span class="text-green-300">Terminal - TorahGPT</span>
				<span class="ml-auto text-green-300 text-xs">SHAUN-OS v1.0</span>
			</div>
			
			<!-- Terminal Content -->
			<div class="flex-grow p-6 overflow-y-auto">
				{#if isMaintenanceMode}
					<div class="mb-6 p-4 bg-yellow-900 bg-opacity-30 border border-yellow-400 rounded">
						<div class="flex items-start">
							<span class="text-yellow-400 mr-2">⚠</span>
							<div class="text-yellow-300">
								<div class="font-bold">TorahGPT - Maintenance Mode</div>
								<div class="text-sm mt-1">Interactive features temporarily disabled. Expected restoration: Coming soon</div>
							</div>
						</div>
					</div>
				{/if}

				<!-- Command prompt -->
				<div class="mb-4">
					<span class="text-green-300">> ./torahgpt --demo --experimental</span>
				</div>

				<!-- Warning Box -->
				<div class="mb-6 p-4 bg-red-900 bg-opacity-30 border border-red-400 rounded">
					<div class="text-red-300 text-sm space-y-2">
						<div class="text-red-400 font-bold">⚠ EXPERIMENTAL - DO NOT USE FOR HALACHIC DECISIONS ⚠</div>
						<div>• Current accuracy: Below 45% - High bias risk</div>
						<div>• Model can be prompted to give different answers</div>
						<div>• Actively working on improvements and source citation</div>
						<div>• Designed for short answers - ask for depth if needed</div>
						<div>• No knowledge of current events</div>
					</div>
				</div>

				<!-- Info Links -->
				<div class="mb-6 text-sm text-green-300 space-y-1">
					<div>ADDITIONAL INFO:</div>
					<div class="ml-4">• <a href="/torahgpt/faq?what_is_this" class="text-cyan-400 hover:text-cyan-300 underline">What is this?</a></div>
					<div class="ml-4">• <a href="/torahgpt/faq?contribute" class="text-cyan-400 hover:text-cyan-300 underline">How to contribute</a></div>
				</div>
				<!-- Question Input -->
				<div class="mb-4">
					<div class="text-green-400 mb-2">ASK A QUESTION TO TORAHGPT:</div>
					<div class="flex items-start">
						<span class="text-green-300 mr-2 mt-2">></span>
						<div class="flex-1">
							<input
								name="question"
								bind:value={text}
								placeholder="What does the Rambam say about rain on the 17th of Marcheshvan?"
								class="w-full bg-black border border-green-400 text-green-400 p-3 rounded font-mono focus:outline-none focus:border-green-300 {isMaintenanceMode ? 'opacity-50 cursor-not-allowed' : ''}"
								disabled={isMaintenanceMode}
							/>
						</div>
					</div>
				</div>

				<!-- Examples Toggle -->
				<div class="mb-4">
					<button
						class="text-sm text-cyan-400 hover:text-cyan-300 underline"
						on:click={() => {
							hideExamples = !hideExamples;
						}}
					>
						{hideExamples ? 'Show' : 'Hide'} example questions
					</button>
					{#if !hideExamples}
						<div class="mt-2 ml-4 text-sm text-green-300 space-y-1">
							<div>• How long should I wait between eating meat and milk?</div>
							<div>• What is the Parsha of B'shalach about?</div>
							<div>• What does the Rambam say about rain on the 17th of Marcheshvan?</div>
							<div>• Why did Moshe cross the sea?</div>
							<div>• Why was there an added Bracha to the Amidah?</div>
						</div>
					{/if}
				</div>

				<!-- Depth Toggle -->
				<div class="mb-4 flex items-center">
					<span class="text-green-400 mr-4">IN-DEPTH MODE:</span>
					<button
						type="button"
						class={indepth && !isMaintenanceMode
							? 'bg-green-400 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-green-400 transition-colors duration-200 ease-in-out'
							: isMaintenanceMode 
							? 'bg-gray-600 opacity-50 cursor-not-allowed relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-gray-600'
							: 'bg-gray-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-gray-600 transition-colors duration-200 ease-in-out'}
						role="switch"
						disabled={isMaintenanceMode}
						on:click={() => {
							if (!isMaintenanceMode) {
								indepth = !indepth;
							}
						}}
					>
						<span class="sr-only">Toggle in-depth mode</span>
						<span 
							aria-hidden="true" 
							class={indepth && !isMaintenanceMode
								? 'translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-black shadow ring-0 transition duration-200 ease-in-out'
								: 'translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-gray-300 shadow ring-0 transition duration-200 ease-in-out'}
						/>
					</button>
					<span class="ml-2 text-green-300 text-sm">{indepth ? 'ON' : 'OFF'}</span>
				</div>

				<!-- Ask Button -->
				<div class="mb-6">
					<button
						class="px-6 py-2 border-2 border-green-400 text-green-400 rounded font-mono hover:bg-green-400 hover:text-black transition-colors {isMaintenanceMode ? 'opacity-50 cursor-not-allowed hover:bg-transparent hover:text-green-400' : ''}"
						disabled={isMaintenanceMode}
						on:click={() => {
							if (!isMaintenanceMode) {
								answer = getCompletion();
							}
						}}
					>
						ASK TORAHGPT
					</button>
				</div>

				<!-- Answer Display -->
				<div class="mb-4">
					<Answer {answer} {awaitedAnswer} bind:question={text} />
				</div>

				<!-- Navigation -->
				<TerminalNavigation currentPage="torahgpt" />
			</div>
			
			<!-- Status Bar -->
			<div class="px-4 py-1 text-xs text-green-300 flex justify-between border-t border-green-400">
				<span>TORAHGPT</span>
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
	
	:global(.text-red-400) {
		text-shadow: 0 0 5px rgba(248, 113, 113, 0.5);
	}
	
	:global(.text-red-300) {
		text-shadow: 0 0 5px rgba(252, 165, 165, 0.5);
	}
	
	:global(.text-cyan-400) {
		text-shadow: 0 0 5px rgba(34, 211, 238, 0.5);
	}
	
	:global(.text-cyan-300) {
		text-shadow: 0 0 5px rgba(103, 232, 249, 0.5);
	}
</style>
