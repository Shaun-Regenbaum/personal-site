<script lang="ts">
	import Correction from '$lib/components/Correction.svelte';
	import Expandable from '$lib/components/Expandable.svelte';
</script>

<div class=" bg-slate-500 h-screen text-white">
	<main>
		<Expandable title={'daf'}>
			<p>
				This Project demonstrates an OSS prject that can create tzurat hadaf using native HTML and
				CSS.
			</p>
			<a class="underline text-blue-200" href="https://demo.talmud.app/">Go -></a></Expandable
		>
		<Expandable title={'torah-gpt'}>
			<p>
				This projects demonstrates using large language models in the domain of Talmud Torah and
				Halacha.
			</p>
			<a class="underline text-blue-200" href="/torahgpt">Go -></a></Expandable
		>
		<Expandable title={'single word talmud translation'}>
			<p>This projects demonstrates single word translation for the Gemarah.</p>
			<a class="underline text-blue-200" href="/translation">Go -></a></Expandable
		>
		<Expandable title={'single word rambam translation'}>
			<p>This projects demonstrates single word translation for the Mishneh Torah</p>
			<a class="underline text-blue-200" href="/rambam">Go -></a></Expandable
		>
	</main>
	<p class="ml-4 mt-10 text-lg ">
		Note: I have other projects all over the internet. These are only projects from 2023 and
		onwards. Check my github for others.
	</p>
</div>
