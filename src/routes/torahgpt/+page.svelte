<script lang="ts">
	import Answer from '$lib/components/Answer.svelte';
	let text: string = '';
	let indepth: boolean = false;
	let answer: Promise<string> | undefined = undefined;
	let awaitedAnswer: string | undefined = undefined;
	let hideExamples = true;

	const onState =
		'translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out';
	const offState =
		'translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out';

	async function getCompletion() {
		console.log('asking...');
		return fetch('/torahgpt', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				question: text,
				indepth: indepth
			})
		})
			.then(async (response) => {
				const result = response.text();
				console.log(result);
				// if the first charecter is a quotation mark:
				if ((await result).charAt(0) === '"') {
					// remove the first and last charecters
					awaitedAnswer = (await result).slice(1, -1);
				} else {
					awaitedAnswer = await result;
				}
				return awaitedAnswer;
			})
			.catch(() => {
				throw new Error(text);
			});
	}
</script>

<div class="font-light overflow-hidden bg-white divide-y divide-gray-300 rounded-md bg-opacity-90">
	<div class="p-4 sm:px-6">
		<h1 class="text-3xl leading-6 text-gray-900">
			This is a <span class="font-bold">demo</span>.
		</h1>

		<div class="w-fit h-fit mt-4 p-2  bg-gray-100 rounded-lg shadow-sm border-gray-300 border">
			<p class="ml-4 text-sm max-w-sm font-medium text-gray-700">
				Please <span class="underline">do not</span> use this for any serious halachic questions. There
				is a lot of bias present and the model can be prompted to answer in different ways.
			</p>
			<div class="w-fit h-fit ml-3 my-3 py-1 px-2 rounded-xl bg-red-200 shadow-sm">
				<p class="text-xs text-gray-800">
					The current tested accuracy is <span class="text-red-400">below 45%.</span>
				</p>
			</div>
			<p class="ml-4 mb-3 text-sm max-w-sm font-medium text-gray-700">
				I am actively working on improving the results and the ability to quote sources.
			</p>
			<p class="ml-4 text-sm max-w-sm font-medium text-gray-700">
				If you don't know what this is, click <a
					href="/torahgpt/faq?what_is_this"
					class="underline underline-offset-2 text-blue-500">here</a
				> to find out more.
			</p>
			<p class="ml-4 text-sm max-w-sm font-medium text-gray-700">
				If you want to contribute, click <a
					href="/torahgpt/faq?contribute"
					class="underline underline-offset-2 text-blue-500">here</a
				> to learn how.
			</p>
			<br />
			<p class="ml-4 text-sm max-w-sm font-medium text-gray-700">
				This model is trained to output short answers, perferably one sentence long. If you want it
				to go in more depth, you must ask it to.
			</p>
			<br />
			<p class="ml-4 text-sm max-w-sm font-medium text-gray-700">
				This model does not know what today is and can't answer questions about recent events.
				Sometimes it will try, but know the answer is almost guarenteed to be wrong.
			</p>
			<br />
			<p class="ml-4 text-sm max-w-sm font-medium text-gray-700">
				Overtime, I will add more options to tweak how the model responds. The current bottleneck is
				the limited number of examples I gave it to show it how it should answer.
			</p>
			<br />
			<p class="ml-4 text-sm max-w-sm font-medium text-gray-700">
				So if you want it to act differently, message me with an example of how it ought to act and
				I will add the capability. Simple as that.
			</p>
		</div>
	</div>
	<div class=" px-4 py-5 sm:px-6">
		<label for="question" class="block  text-sm font-medium text-gray-700"
			>Ask a Question to TorahGPT:</label
		>
		<input
			name="question"
			bind:value={text}
			placeholder="What does the Rambam say to do if the seventeenth of Marcheshvan has arrived and no rains have yet descended?"
			class="block min-w-[300px] p-3 border-gray-300 border hover:bg-gray-50 focus:bg-gray-50 rounded-md shadow-sm sm:text-sm"
		/>

		<button
			class=" my-1 text-xs"
			on:click={() => {
				hideExamples = !hideExamples;
			}}
		>
			Click <span>here</span> for some examples.
		</button>
		<ul hidden={hideExamples} class="ml-2 text-xs">
			<li>- How long should I wait between eating meat and milk?</li>
			<li>- What is the Parsha of B'shalach about?</li>
			<li>
				- What does the Rambam say to do if the seventeenth of Marcheshvan has arrived and no rains
				have yet descended?
			</li>
			<li>- Why did Moshe cross the sea?</li>
			<!-- <li>
				- "According to the lenient opinion, do I have to replace my tzitzit if some of the string
				breaks at the loop connecting the beged?"
			</li> -->
			<li>- Why was there an added Bracha to the Amidah?</li>
		</ul>
		<div />
		<label for="switch" class="inline mr-2 text-sm font-medium text-gray-700"
			>Toggle to go in depth:</label
		>
		<button
			type="button"
			class={indepth
				? 'bg-green-500 relative align-middle inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
				: 'bg-gray-200  relative align-middle inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'}
			role="switch"
			aria-checked="false"
			on:click={() => {
				console.log('clicked');
				indepth = !indepth;
			}}
		>
			<span class="sr-only">Use setting</span>
			<!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
			<span aria-hidden="true" class={indepth ? onState : offState} />
		</button>

		<button
			class="block mt-2 px-4 py-2 text-sm font-medium items-center rounded-md border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
			on:click={() => {
				answer = getCompletion();
			}}>Ask</button
		>
	</div>
	<div class="px-4 py-5 sm:p-6">
		<Answer {answer} {awaitedAnswer} bind:question={text} />
	</div>
</div>
