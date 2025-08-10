<!-- Inspired by https://github.com/adamsky/globe -->
<script lang="ts">
	import { onMount } from 'svelte';
	import AsciiGlobe from '$lib/AsciiGlobe.svelte';
	
	let terminalLines = [
		'> System booting...',
		'> Loading kernel modules... [OK]',
		'> Welcome to SHAUN-OS v1.0',
		'> whoami',
		'Shaun Regenbaum',
		'> cat /etc/motd',
		'Website under construction',
		'Feel free to explore available routes',
		'> ls -la /',
		'drwxr-xr-x  projects/',
		'drwxr-xr-x  background/',
		'-rw-r--r--  README.md',
		'',
		'# Click any of the links below to explore:',
		'> cd projects/',
		'> cd background/',
		'> echo $STATUS',
		'Server running on localhost:8080'
	];
	
	let displayedLines: string[] = [];
	let currentLineIndex = 0;
	let cursorVisible = true;
	let isMobile = false;
	
	onMount(() => {
		// Check if mobile
		isMobile = window.innerWidth < 768;
		
		// Type out terminal lines
		const typeInterval = setInterval(() => {
			if (currentLineIndex < terminalLines.length) {
				displayedLines = [...displayedLines, terminalLines[currentLineIndex]];
				currentLineIndex++;
			} else {
				clearInterval(typeInterval);
			}
		}, 100);
		
		// Cursor blink
		const cursorInterval = setInterval(() => {
			cursorVisible = !cursorVisible;
		}, 500);
		
		// Handle resize
		const handleResize = () => {
			isMobile = window.innerWidth < 768;
		};
		window.addEventListener('resize', handleResize);
		
		return () => {
			clearInterval(typeInterval);
			clearInterval(cursorInterval);
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<div class="min-h-screen bg-black text-green-400 font-mono">
	<div class="h-screen flex flex-col">
		<!-- Terminal Border -->
		<div class="border-2 border-green-400 flex-grow flex flex-col">
			<!-- Terminal Header -->
			<div class="flex items-center px-2 sm:px-4 py-1 sm:py-2 border-b border-green-400">
				<span class="text-green-300 text-xs sm:text-sm">Terminal</span>
				<span class="ml-auto text-green-300 text-xs">SHAUN-OS v1.0</span>
			</div>
			
			<!-- Terminal Content -->
			<div class="flex-grow flex flex-col">
				<!-- Globe section -->
				<div class="md:flex md:flex-row flex-grow">
					<div class="md:w-1/2 md:border-r border-b md:border-b-0 border-green-400 p-2 sm:p-4 flex flex-col">
					<div class="text-green-300 mb-2 text-xs sm:text-sm">> cat /usr/share/world.map</div>
					<div class="flex-grow flex items-center justify-center min-h-[200px] md:min-h-0">
						<AsciiGlobe />
					</div>
					<div class="text-xs text-gray-400 mt-1 text-center">
						Globe inspired by 
						<a href="https://github.com/adamsky/globe" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 hover:underline">
							github.com/adamsky/globe
						</a>
					</div>
						<div class="text-xs text-green-300 mt-2 sm:mt-4 space-y-1">
							<div class="text-green-300 mb-2">Navigation (click to explore):</div>
							<a href="/projects" class="text-orange-400 hover:text-orange-300 hover:underline block">
								> cd projects/
							</a>
							<a href="/background" class="text-orange-400 hover:text-orange-300 hover:underline block">
								> cd background/
							</a>
						</div>
					</div>
				
					<!-- Terminal Output (bottom on mobile, right on desktop) -->
					<div class="md:w-1/2 p-2 sm:p-4 overflow-y-auto">
					<div class="space-y-1 text-xs sm:text-sm">
						{#each displayedLines as line, index}
							<div class={
								line.includes('projects/') || line.includes('background/') ? 'text-green-300 cursor-pointer hover:text-orange-300 hover:underline' :
								line.startsWith('>') ? 'text-green-300' : 'text-green-400'
							}>
								{#if line.includes('cd projects/')}
									<a href="/projects" class="inline">
										{line}
									</a>
								{:else if line.includes('cd background/')}
									<a href="/background" class="inline">
										{line}
									</a>
								{:else if line.includes('projects/') && !line.includes('cd')}
									<a href="/projects" class="inline">
										{line}
									</a>
								{:else if line.includes('background/') && !line.includes('cd')}
									<a href="/background" class="inline">
										{line}
									</a>
								{:else}
									{line}
								{/if}
							</div>
						{/each}
						{#if currentLineIndex >= terminalLines.length}
							<div class="text-green-300">
								> <span class={cursorVisible ? 'opacity-100' : 'opacity-0'}>_</span>
							</div>
						{/if}
						</div>
					</div>
				</div>
			</div>
			
			<!-- Status Bar -->
			<div class="px-2 sm:px-4 py-1 text-xs text-green-300 flex justify-between border-t border-green-400">
				<span>CONNECTED</span>
				<span class="hidden sm:inline">UTF-8</span>
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