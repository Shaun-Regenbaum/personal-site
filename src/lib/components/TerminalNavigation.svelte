<script lang="ts">
	export let currentPage: string = '';
</script>

<div class="mb-6 pt-4 border-t border-green-400">
	<div class="text-green-300 mb-2">> echo "Navigation:"</div>
	<div class="ml-4 space-y-1 text-sm">
		<div>• <a href="/" class="text-orange-400 hover:text-orange-300 hover:underline">cd ~</a> (Home)</div>
		<div>• <a href="/projects" class="text-orange-400 hover:text-orange-300 hover:underline">cd /projects</a> (Projects)</div>
		{#if currentPage !== 'torahgpt'}
			<div>• <a href="/torahgpt" class="text-orange-400 hover:text-orange-300 hover:underline">cd /torahgpt</a> (TorahGPT)</div>
		{/if}
		{#if currentPage !== 'translation'}
			<div>• <a href="/translation" class="text-orange-400 hover:text-orange-300 hover:underline">cd /translation</a> (Talmud Translator)</div>
		{/if}
		{#if currentPage !== 'rambam'}
			<div>• <a href="/rambam" class="text-orange-400 hover:text-orange-300 hover:underline">cd /rambam</a> (Rambam Translator)</div>
		{/if}
	</div>
</div>