<script lang="ts">
	import Section from '$lib/components/containers/Section.svelte';
	import Expandable from '$lib/components/Expandable.svelte';
</script>

<div class=" text-black">
	<p class=" mt-2 text-lg font-metropolis font-bold">
		Note: I have dozens of projects all over the internet. This a random subset that pertaining to my interest in Limud Torah.  
	</p>
	<main>
		<Section title={'Daf Project'}>
			<p class="font-bold font-metropolis text-sm pt-2">
				An OSS prject that can create tzurat hadaf using native HTML and
				CSS with no dependancies.
			</p>
			<a class=" text-orange-500 font-bold font-pixel" href="https://demo.talmud.app/">Go -></a>
		
		</Section>
		<Section title={'Torah GPT'}>
			<p class="font-bold font-metropolis text-sm pt-2">
				Early experimentation using large language models in the domain of Talmud Torah and
				Halacha.
			</p>
			<a class=" text-orange-500 font-bold font-pixel" href="/torahgpt">Go -></a>	</Section>
		<Section title={'Single Word Talmud Translation'}>
			<p class="font-bold font-metropolis text-sm pt-2">This is an MVP demonstrating single word translation for the Gemarah with 90% accuracy. It does not provide etymologies like Jastrow, maybe in the future.</p>
		<a class=" text-orange-500 font-bold font-pixel" href="/translation">Go -></a></Section>
		<Section title={'Single Word Rambam Translation'}>
			<p class="font-bold font-metropolis text-sm pt-2">This projects demonstrates single word translation for the Mishneh Torah</p>
			<a class=" text-orange-500 font-bold font-pixel" href="/rambam">Go -></a></Section>
		
			<Section title={'Daf Explorer'}>
				<p class="font-bold font-metropolis text-sm pt-2">
				This project demonstrates the ability for LLMs to suffecientely explain the logic of a given
				daf. Currentely WIP.
			</p>
			<a class=" text-orange-500 font-bold font-pixel" href="/error">Go -></a></Section
		>
	</main>
	
</div>
