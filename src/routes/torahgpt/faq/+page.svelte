<script lang="ts">
	import { onMount } from 'svelte';
	import TerminalNavigation from '$lib/components/TerminalNavigation.svelte';
	
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
				<span class="text-green-300">Terminal - TorahGPT FAQ</span>
				<span class="ml-auto text-green-300 text-xs">SHAUN-OS v1.0</span>
			</div>
			
			<!-- Terminal Content -->
			<div class="flex-grow p-6 overflow-y-auto space-y-6">
				<!-- Command -->
				<div class="mb-4">
					<span class="text-green-300">> cat torahgpt_faq.md</span>
				</div>

				<!-- What is this? -->
				<div class="space-y-3">
					<div class="text-green-400 font-bold">## WHAT IS TORAHGPT?</div>
					<div class="text-green-300 space-y-2">
						<div>TorahGPT is a fine-tuned version of GPT-3 (Large Language Model) developed by OpenAI, chained to an HNSW (Hierarchical Navigable Small World Vector) lookup indexed on sentence embeddings to provide initial context and sources.</div>
						<div class="text-yellow-300 bg-yellow-900 bg-opacity-20 p-2 rounded border border-yellow-600">
							⚠ CORRECTION: Currently using vanilla GPT-3.5 with HNSW Search Index context
						</div>
					</div>
				</div>

				<!-- What does that mean? -->
				<div class="space-y-3">
					<div class="text-green-400 font-bold">## WHAT DOES THAT MEAN?</div>
					<div class="text-green-300 space-y-2">
						<div>In the past two years, there has been a revolution in computer text processing. These systems can write college-level essays, fool humans, and even write code. NLP (Natural Language Processing) will change how we interact with computers.</div>
						<div>TorahGPT is the first attempt at bringing these methods to the Jewish World. It knows every text on Sefaria and can answer questions about anything. Currently Q&A format, expanding to chatbot later.</div>
					</div>
				</div>

				<!-- I found a mistake -->
				<div class="space-y-3">
					<div class="text-green-400 font-bold">## FOUND A MISTAKE?</div>
					<div class="text-green-300">
						This system will make mistakes. Report bugs via email: shaunregenbaum(at)gmail.com
						Planning to add a report button soon. We'll improve it over time with more data.
					</div>
				</div>

				<!-- Why make this? -->
				<div class="space-y-3">
					<div class="text-green-400 font-bold">## WHY DID YOU MAKE THIS?</div>
					<div class="text-green-300">
						I want the Jewish World to experience cutting-edge technology as it happens, not decades later. 
						Millions of Jewish texts sit unused due to language barriers and complexity. 
						Most Jews don't know how to learn Talmud or navigate halachic sources. 
						This gives everyone the ability to learn and explore in unprecedented ways.
					</div>
				</div>

				<!-- What else working on -->
				<div class="space-y-3">
					<div class="text-green-400 font-bold">## WHAT ELSE ARE YOU WORKING ON?</div>
					<div class="text-green-300">
						Various projects in free time. I run company "402" started in college and do biology research at Hebrew University.
					</div>
				</div>

				<!-- Want to help? -->
				<div class="space-y-3">
					<div class="text-green-400 font-bold">## WANT TO HELP?</div>
					<div class="text-green-300 space-y-3">
						<div class="text-cyan-400">You can contribute in several ways:</div>
						
						<div class="ml-4 space-y-4">
							<div>
								<div class="text-green-400">1. ASK QUESTIONS</div>
								<div class="ml-4">We need lots of data about what people ask. Simply using TorahGPT helps it improve!</div>
							</div>
							
							<div>
								<div class="text-green-400">2. PROVIDE Q&A PAIRS</div>
								<div class="ml-4 space-y-2">
									<div>TorahGPT needs examples to learn proper behavior. Send halachic question-answer pairs with source texts.</div>
									<div class="bg-gray-900 bg-opacity-50 p-3 rounded border border-green-600">
										<div class="text-green-300">Example format:</div>
										<div class="text-green-400 mt-1">> Q: What is the meaning of life?</div>
										<div class="text-green-400">> A: 42 (Brachot 42a, Yevamot 42b)</div>
									</div>
								</div>
							</div>
							
							<div>
								<div class="text-green-400">3. LONG-FORM TESHUVOT</div>
								<div class="ml-4">Need examples for complex questions. Goal: eventually write entire Teshuvot.</div>
							</div>
							
							<div>
								<div class="text-green-400">4. WEB DEVELOPERS</div>
								<div class="ml-4">Help build next generation learning experiences. See: <a class="text-cyan-400 hover:text-cyan-300 underline" href="https://demo.talmud.app">demo.talmud.app</a></div>
							</div>
							
							<div>
								<div class="text-green-400">5. ENGINEERS</div>
								<div class="ml-4 space-y-1">
									<div>• Statistical work (vector embeddings, source matching)</div>
									<div>• Prompt engineering (methodical experimentation)</div>
									<div>• Data cleanup (scraping, HTML parsing, OCR)</div>
									<div>• Sourcing (scraping, HTML parsing)</div>
								</div>
							</div>
							
							<div>
								<div class="text-green-400">6. OTHER</div>
								<div class="ml-4">Always more ways to help - just reach out!</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Navigation -->
				<TerminalNavigation currentPage="torahgpt" />
				
				<!-- Cursor -->
				<div class="text-green-300">
					> <span class={showCursor ? 'opacity-100' : 'opacity-0'}>_</span>
				</div>
			</div>
			
			<!-- Status Bar -->
			<div class="px-4 py-1 text-xs text-green-300 flex justify-between border-t border-green-400">
				<span>TORAHGPT FAQ</span>
				<span>DOCUMENTATION</span>
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
	
	:global(.text-cyan-400) {
		text-shadow: 0 0 5px rgba(34, 211, 238, 0.5);
	}
	
	:global(.text-cyan-300) {
		text-shadow: 0 0 5px rgba(103, 232, 249, 0.5);
	}
	
	:global(.text-yellow-300) {
		text-shadow: 0 0 5px rgba(253, 224, 71, 0.5);
	}
</style>
