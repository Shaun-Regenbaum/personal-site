<script lang="ts">
	import { onMount } from 'svelte';
	
	const experiences = [
		{
			company: 'Tissue Dynamics',
			role: 'Head of Development',
			period: '2019-Present',
			location: 'Rehovot, Israel',
			description: 'Software development from embedded to ML. Published in Science and Nature. High throughput lab automation, generative drug design, ADMET prediction, bioinformatics.'
		},
		{
			company: '402',
			role: 'Founder',
			period: '2021-Present',
			location: 'Atlanta, GA',
			description: 'Acquired. HPC with Nextflow. Generative drug design. Trusted by over 400 researchers worldwide.'
		},
		{
			company: 'Georgia Institute of Technology',
			role: 'Student Researcher',
			period: '2019-2022',
			location: 'Atlanta, GA',
			description: 'Undergrad bioinformatics research. Local ancestry stratification using RNASeq. Admissions systems for ISyE Masters Programs.'
		},
		{
			company: 'Talmud Lab',
			role: 'Co-Founder',
			period: '2019-2021',
			location: 'Atlanta, GA',
			description: 'First funded student-led lab at Georgia Tech. Backed by the DILAC and Sefaria.'
		},
		{
			company: 'Believer Meats',
			role: 'Bioinformatics Intern',
			period: '2019-2021',
			location: 'Jerusalem, Israel',
			description: 'Cultivated (lab-grown) meat. Bioinformatics work through Nahmias Lab at HUJI.'
		}
	];

	const education = [
		{
			institution: 'Hebrew University of Jerusalem',
			degree: 'PhD, Bioengineering',
			period: '2023-2027',
			details: 'Current doctoral studies'
		},
		{
			institution: 'Georgia Institute of Technology',
			degree: 'BS, Biomedical Engineering',
			period: '2018-2021',
			details: 'Minor in Physics'
		}
	];

	const achievements = [
		'Sold first company in 2017',
		'Co-founded first funded student-led lab in US (2020)',
		'Published in top journals (Science, Nature)',
		'Built VC-backed bioinformatics firm serving 400+ researchers',
		'Completed largest human organoid screen to date (7,680 organoids)',
		'Contributed to dozens of OSS projects'
	];
	
	let displayedExperiences: typeof experiences = [];
	let displayedEducation: typeof education = [];
	let displayedAchievements: string[] = [];
	let currentSection = 'experience';
	let currentIndex = 0;
	let showCursor = true;
	
	onMount(() => {
		// Display items one by one
		const displayInterval = setInterval(() => {
			if (currentSection === 'experience' && currentIndex < experiences.length) {
				displayedExperiences = [...displayedExperiences, experiences[currentIndex]];
				currentIndex++;
			} else if (currentSection === 'experience' && currentIndex === experiences.length) {
				currentSection = 'education';
				currentIndex = 0;
			} else if (currentSection === 'education' && currentIndex < education.length) {
				displayedEducation = [...displayedEducation, education[currentIndex]];
				currentIndex++;
			} else if (currentSection === 'education' && currentIndex === education.length) {
				currentSection = 'achievements';
				currentIndex = 0;
			} else if (currentSection === 'achievements' && currentIndex < achievements.length) {
				displayedAchievements = [...displayedAchievements, achievements[currentIndex]];
				currentIndex++;
			} else {
				clearInterval(displayInterval);
			}
		}, 300);
		
		// Cursor blink
		const cursorInterval = setInterval(() => {
			showCursor = !showCursor;
		}, 500);
		
		return () => {
			clearInterval(displayInterval);
			clearInterval(cursorInterval);
		};
	});
</script>

<div class="min-h-screen bg-black text-green-400 font-mono">
	<div class="h-screen flex flex-col">
		<!-- Terminal Border -->
		<div class="border-2 border-green-400 flex-grow flex flex-col">
			<!-- Terminal Header -->
			<div class="flex items-center px-4 py-2 border-b border-green-400">
				<span class="text-green-300">Terminal - Background</span>
				<span class="ml-auto text-green-300 text-xs">SHAUN-OS v1.0</span>
			</div>
			
			<!-- Terminal Content -->
			<div class="flex-grow p-6 overflow-y-auto">
				<!-- Command -->
				<div class="mb-4">
					<span class="text-green-300">> cat /usr/share/background.md</span>
				</div>
				
				<!-- Experience Section -->
				{#if displayedExperiences.length > 0}
					<div class="mb-8">
						<div class="text-sm text-green-300 mb-4">## Professional Experience</div>
						<div class="space-y-6">
							{#each displayedExperiences as exp}
								<div class="border-l-2 border-green-400 pl-4">
									<div class="text-sm">
										<span class="text-orange-400 font-bold">{exp.company}</span>
										<span class="text-green-300 mx-2">|</span>
										<span class="text-green-400">{exp.role}</span>
									</div>
									<div class="text-xs text-green-300 opacity-70 mt-1">
										{exp.period} • {exp.location}
									</div>
									<div class="text-xs text-green-400 mt-2 leading-relaxed">
										{exp.description}
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}

				<!-- Education Section -->
				{#if displayedEducation.length > 0}
					<div class="mb-8">
						<div class="text-sm text-green-300 mb-4">## Education</div>
						<div class="space-y-4">
							{#each displayedEducation as edu}
								<div class="border-l-2 border-green-400 pl-4">
									<div class="text-sm">
										<span class="text-orange-400 font-bold">{edu.institution}</span>
									</div>
									<div class="text-xs text-green-400 mt-1">
										{edu.degree} • {edu.period}
									</div>
									<div class="text-xs text-green-300 opacity-70 mt-1">
										{edu.details}
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}

				<!-- Achievements Section -->
				{#if displayedAchievements.length > 0}
					<div class="mb-8">
						<div class="text-sm text-green-300 mb-4">## Key Achievements</div>
						<div class="space-y-2">
							{#each displayedAchievements as achievement}
								<div class="text-xs text-green-400">
									<span class="text-orange-400">▶</span> {achievement}
								</div>
							{/each}
						</div>
					</div>
				{/if}
				
				<!-- Navigation -->
				{#if currentSection === 'done' || (currentSection === 'achievements' && currentIndex >= achievements.length)}
					<div class="mt-8 pt-4 border-t border-green-400">
						<div class="text-sm text-green-300 mb-2">
							# Click to return home:
						</div>
						<div class="text-sm text-green-300">
							<a href="/" class="text-orange-400 hover:text-orange-300 hover:underline">
								> cd ..
							</a>
						</div>
						<div class="text-sm text-green-300 mt-2">
							> <span class={showCursor ? 'opacity-100' : 'opacity-0'}>_</span>
						</div>
					</div>
				{/if}
			</div>
			
			<!-- Status Bar -->
			<div class="px-4 py-1 text-xs text-green-300 flex justify-between border-t border-green-400">
				<span>BACKGROUND</span>
				<span>{displayedExperiences.length + displayedEducation.length + displayedAchievements.length} items</span>
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
	
	:global(.text-orange-400) {
		text-shadow: 0 0 10px rgba(251, 146, 60, 0.8);
	}
</style>