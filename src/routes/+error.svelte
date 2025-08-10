<script>
	import '../app.css';
	import { onMount } from 'svelte';
	
	let showCursor = true;
	
	onMount(() => {
		const cursorInterval = setInterval(() => {
			showCursor = !showCursor;
		}, 500);
		
		return () => {
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
				<span class="text-green-300">Terminal - Error Handler</span>
				<span class="ml-auto text-green-300 text-xs">SHAUN-OS v1.0</span>
			</div>
			
			<!-- Terminal Content -->
			<div class="flex-grow p-6 overflow-y-auto">
				<!-- Error message -->
				<div class="mb-6">
					<span class="text-red-400">ERROR 404:</span>
					<span class="text-green-300"> Page not found</span>
				</div>

				<!-- Command prompt -->
				<div class="mb-4">
					<span class="text-green-300">> cat wisdom.txt</span>
				</div>

				<!-- The poem -->
				<div class="mb-8 text-green-300 space-y-1">
					<div class="text-green-400 mb-3">What Is The Road To Wisdom?</div>
					<div></div>
					<div>Well, Its Plain</div>
					<div>And Simple To Express:</div>
					<div></div>
					<div>Err</div>
					<div class="ml-8">And Err</div>
					<div class="ml-16">And Err Again.</div>
					<div></div>
					<div>But Less</div>
					<div class="ml-8">And Less</div>
					<div class="ml-16">And Less.</div>
					<div></div>
					<div class="text-green-400">— Piet Hein</div>
				</div>

				<!-- Navigation -->
				<div class="space-y-2">
					<div class="text-green-300">> echo "Available navigation:"</div>
					<div class="ml-4 space-y-1">
						<div>• <a href="/" class="text-orange-400 hover:text-orange-300 hover:underline">cd ~</a> (Home)</div>
						<div>• <a href="/projects" class="text-orange-400 hover:text-orange-300 hover:underline">cd /projects</a> (Projects)</div>
						<div>• <a href="/torahgpt" class="text-orange-400 hover:text-orange-300 hover:underline">cd /torahgpt</a> (TorahGPT)</div>
						<div>• <a href="/translation" class="text-orange-400 hover:text-orange-300 hover:underline">cd /translation</a> (Talmud Translator)</div>
						<div>• <a href="/rambam" class="text-orange-400 hover:text-orange-300 hover:underline">cd /rambam</a> (Rambam Translator)</div>
					</div>
					
					<div class="mt-4 text-green-300">
						> <span class={showCursor ? 'opacity-100' : 'opacity-0'}>_</span>
					</div>
				</div>
			</div>
			
			<!-- Status Bar -->
			<div class="px-4 py-1 text-xs text-green-300 flex justify-between border-t border-green-400">
				<span>ERROR HANDLER</span>
				<span>404 NOT FOUND</span>
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
	
	:global(.text-red-400) {
		text-shadow: 0 0 5px rgba(248, 113, 113, 0.5);
	}
</style>
