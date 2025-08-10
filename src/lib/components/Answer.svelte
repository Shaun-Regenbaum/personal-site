<script lang="ts">
	export let answer: Promise<string> | undefined;
	export let awaitedAnswer: string | undefined;
	export let question: string;

</script>

{#if question}
	<div class="border border-green-400 rounded p-4 bg-black">
		<div class="space-y-3 font-mono">
			<div class="text-green-400">
				<span class="text-green-300">> query:</span> 
				<span class="text-green-400">{question}</span>
			</div>
			
			{#if answer}
				{#await answer}
					<div class="text-green-300">
						<span class="text-green-300">> response:</span> 
						<span class="text-yellow-400">Processing query...</span>
					</div>
				{:then}
					<div class="text-green-300">
						<span class="text-green-300">> response:</span>
					</div>
					<div class="ml-4 text-green-400 bg-gray-900 bg-opacity-50 p-3 rounded border border-green-600">
						{awaitedAnswer}
					</div>
				{/await}
			{:else}
				<div class="text-green-300">
					<span class="text-green-300">> response:</span> 
					<span class="text-gray-500">Awaiting query...</span>
				</div>
			{/if}
		</div>
	</div>
{/if}
