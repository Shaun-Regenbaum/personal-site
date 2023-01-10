<script lang="ts">
	import Expandable from '$lib/components/Expandable.svelte';
</script>

<div>
	<main class=" bg-slate-500 h-screen text-white">
		<Expandable title={'daf'}>
			<p>
				This Project demonstrates an OSS prject that can create tzurat hadaf using native HTML and
				CSS.
			</p>
			<a class="underline text-blue-400" href="/daf">Go.</a></Expandable
		>
		<Expandable title={'torahgpt'}>
			<p>
				This projects demonstrates using large language models in the domain of Talmud Torah and
				Halacha.
			</p>
			<a class="underline text-blue-400" href="/torahgpt">Go.</a></Expandable
		>
	</main>
</div>
