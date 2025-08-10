<script lang="ts">
	import { onMount } from 'svelte';
	
	const projects = [
		{
			name: 'daf-project',
			description: 'OSS project that creates tzurat hadaf using native HTML/CSS',
			url: null,
			size: '2.4M',
			modified: '2024-01-15',
			status: 'down'
		},
		{
			name: 'torah-gpt',
			description: 'LLM experimentation in Talmud Torah and Halacha',
			url: '/torahgpt',
			size: '1.8M',
			modified: '2024-02-20',
			status: 'down'
		},
		{
			name: 'talmud-translator',
			description: 'Single word translation for Gemarah with 90% accuracy',
			url: '/translation',
			size: '956K',
			modified: '2024-01-08',
			status: 'down'
		},
		{
			name: 'rambam-translator',
			description: 'Single word translation for Mishneh Torah',
			url: '/rambam',
			size: '1.2M',
			modified: '2023-12-22',
			status: 'down'
		},
		{
			name: 'israel-agent',
			description: 'LLM-powered agent for Israeli geopolitical analysis',
			url: 'https://github.com/Shaun-Regenbaum/israel-agent',
			size: '234K',
			modified: '2024-08-15',
			status: 'active'
		},
		{
			name: 'nRF52840-SDK-Overview',
			description: 'Easy to read guide to the Nordic SDK (archived)',
			url: 'https://github.com/Shaun-Regenbaum/nRF52840-SDK-Overview',
			size: '178K',
			modified: '2023-11-20',
			status: 'active'
		},
		{
			name: 'OneUSGAutomaticClock',
			description: 'Automatic time tracking script for work hours',
			url: 'https://github.com/Shaun-Regenbaum/OneUSGAutomaticClock',
			size: '45K',
			modified: '2024-01-10',
			status: 'active'
		},
		{
			name: 'CIOS_Scraper',
			description: 'Web scraper for CIOS data collection (archived)',
			url: 'https://github.com/Shaun-Regenbaum/CIOS_Scraper',
			size: '67K',
			modified: '2023-09-15',
			status: 'active'
		},
		{
			name: 'hu-glioblastoma',
			description: 'Bioinformatics research on glioblastoma organoids',
			url: 'https://github.com/Shaun-Regenbaum/hu-glioblastoma',
			size: '2.1M',
			modified: '2024-01-30',
			status: 'active'
		}
	];
	
	let displayedProjects: typeof projects = [];
	let currentIndex = 0;
	let showCursor = true;
	
	onMount(() => {
		// Display projects one by one
		const displayInterval = setInterval(() => {
			if (currentIndex < projects.length) {
				displayedProjects = [...displayedProjects, projects[currentIndex]];
				currentIndex++;
			} else {
				clearInterval(displayInterval);
			}
		}, 200);
		
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
				<span class="text-green-300">Terminal - Projects</span>
				<span class="ml-auto text-green-300 text-xs">SHAUN-OS v1.0</span>
			</div>
			
			<!-- Terminal Content -->
			<div class="flex-grow p-6 overflow-y-auto">
				<!-- Command -->
				<div class="mb-4">
					<span class="text-green-300">> cd /projects && ls -la</span>
				</div>
				
				
				<!-- Project listing -->
				<div class="space-y-4">
					<div class="text-sm text-green-400 mb-2">
						<span class="inline-block w-12">perms</span>
						<span class="inline-block w-8 text-right">size</span>
						<span class="inline-block w-24 text-center">modified</span>
						<span class="inline-block ml-4">name</span>
					</div>
					
					{#each displayedProjects as project}
						<div class="group">
							<div class="text-sm">
								<span class="inline-block w-12 text-green-300">drwxr-xr-x</span>
								<span class="inline-block w-8 text-right text-green-400">{project.size}</span>
								<span class="inline-block w-24 text-center text-green-400">{project.modified}</span>
								{#if project.url}
									<a 
										href={project.url}
										class="inline-block ml-4 text-orange-400 hover:text-orange-300 hover:underline"
									>
										{project.name}/
									</a>
								{:else}
									<span class="inline-block ml-4 text-green-400 opacity-70">
										{project.name}/
									</span>
								{/if}
							</div>
							<div class="ml-48 text-xs text-green-300 opacity-70">
								└─ {project.description}
							</div>
						</div>
					{/each}
				</div>
				
				<!-- Navigation -->
				{#if currentIndex >= projects.length}
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
				<span>PROJECTS</span>
				<span>{displayedProjects.length}/{projects.length} loaded</span>
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
</style>