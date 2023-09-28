<script>
  import Section from '../../lib/components/containers/Section.svelte';

	import Abbr from "$lib/components/Abbr.svelte";
	import ComponentBackground from "$lib/components/containers/ComponentBackground.svelte";
	import MaximizeIcon from "$lib/components/icons/MaximizeIcon.svelte";
	import MinimizeIcon from "$lib/components/icons/MinimizeIcon.svelte";
	let minimized = false;

</script>
<main class="h-full w-full font-serif tracking-wide text-black ">
	<Section title="Who am I?"><div class="px-8 py-4 space-y-4 md:font-bold">
		<h3>
			I am a <span class="font-science text-3xl">Jew.</span>
		</h3>
		<h3>
			I am an <span class="font-science text-3xl">engineer.</span>
		</h3>
		<h3>
			I am a <span class="font-science text-3xl">researcher.</span>
		</h3>
	</div></Section>
<Section title="Where am I from?">
	<div class="px-8 py-6 space-y-4 md:font-bold">
		<h3>
			My family hails from <span class="font-science text-lg">Johanessburg, South Africa.</span>
			<span class="text-3xl px-2 mx-1 rounded-lg border-double border-2 border-black ">
				{' '}🇿🇦</span
			>
		</h3>

		<h3>
			Grew up as a First Generation American in <span class="font-science text-lg"
				>Atlanta, Georgia.</span
			><span class="text-3xl pr-2 mx-1 rounded-lg border-double border-2 border-black "
				>{' '}🇺🇸</span
			>
		</h3>
		<h3>
			Immigrated and now living in <span class="font-science text-lg">Jerusalem, Israel.</span
			><span class="text-3xl pr-2 mx-1 rounded-lg border-double border-2 border-black "
				>{' '}🇮🇱</span
			>
		</h3>
	</div>
</Section>
			

<Section title="College">
	<div class="px-8 py-6 md:font-bold">
		<p>
			Recepient of Zell-Miller Scholarship, a full-ride to <span class="font-science text-lg"
				>Georgia Tech</span
			>.
		</p>
		<div class="py-3">{' '}</div>
		<p>
			Co-founded the first funded student-led <a
				class="underline text-green-800"
				href="https://dilac.iac.gatech.edu/node/66"
			>
				lab
			</a>
			at{' '}
			<span class="font-science text-lg">Georgia Tech</span>,
		</p>
		<div class="pl-2">
			<span class="font-aorell">
				<div>The</div>
				<div class="pl-4">Talmud</div>
				<div class="px-8">
					Lab,{' '}
					<span class="font-sans align-bottom">
						with <a
							class="underline text-green-800"
							href="			https://github.com/Jutanium
									"
						>
							Dan Jutan</a
						>.
					</span>
				</div>
			</span>
			<br />
			<p>
				Doing a Phd at <span class="font-science text-lg">Hebrew University</span>.
			</p>
		</div>
</Section>
<Section title="Research">
	<div class="px-8 py-6 md:font-bold">
		<div class="space-y-4">
			<p>
				I do bioinformatics and machine learning research.
			</p>
			<p>
				My first scientific <a
					class="underline text-green-800"
					href="https://pubmed.ncbi.nlm.nih.gov/33627489/">paper</a
				>
				was published in{' '}
				<span class="font-science text-lg">Science</span>.
			</p>
			<p>
				I've worked on <span class="font-science text-lg">Cultivated Meat</span> and{' '}
				<span class="font-science text-lg">Tissue-on-a-chip</span> tech at the
				<a class="underline text-green-800" href="https://www.nahmias-lab.com"> Nahmias Lab </a>
				at <span class="font-science text-lg">HUJI.</span>
			</p>
			<p>
				Experimented with population genomics at{' '}
				<span class="font-science text-lg">Georgia Tech</span>.
			</p>
		</div>
	</div>

</Section>
<Section title="Entrepeneurship">
	<div class="px-8 p-8 space-y-4 md:font-bold">
		<p class="align-bottom">
			Sold my first
			<span class="font-science text-lg">Business</span> in high school.
		</p>
		<p class="align-bottom">
			Worked in fields ranging from <Abbr
				abbr={'ED'}
				expanded={'Embedded Systems'}
				style2={true}
			/> to <Abbr abbr={'ML'} expanded={'Machine Learning'} style2={true} />.
		</p>
		<p>
			Founded{' '}
			<span
				class="align-text-middle bg-slate-200 p-1 ml-1 rounded-lg border-2 border-slate-600"
			>
				<svg
					viewBox="0 0 127 51"
					width="48px"
					height="18px"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="inline align-text-bottom"
				>
					<path
						d="M51.2059 0.159058L73.7614 0.159159C80.2702 0.15919 85.5466 5.43565 85.5466 11.9445V40.7435H76.181V13.0603C76.181 11.1076 74.598 9.52469 72.6454 9.52469H51.2059V0.159058Z"
						fill="#81D2FF"
					/>
					<path
						d="M41.8391 9.52478H51.2047V37.208C51.2047 39.1606 52.7877 40.7436 54.7403 40.7436H76.1798V50.1092H53.6244C47.1156 50.1092 41.8391 44.8328 41.8391 38.3239V9.52478Z"
						fill="#FF7346"
					/>
					<path
						d="M36.6821 26.9787H27.2885V11.7292L0 27.9332V16.9892L26.9262 0.1604H36.6821V26.9787Z"
						fill="#6C42C5"
					/>
					<path
						d="M0.000244141 40.6078V30.5541L24.8214 30.5541C31.3303 30.5541 36.6068 35.8305 36.6068 42.3394V50.0658H27.2411V42.9648C27.2411 41.6631 26.1858 40.6078 24.8841 40.6078H0.000244141Z"
						fill="#FFC700"
					/>
					<path
						d="M90.3162 0.159058H112.647C116.338 0.159058 119.909 1.60258 122.579 4.15119C125.386 6.83096 126.998 10.5655 126.998 14.4464C126.998 20.4251 123.254 25.7635 117.633 27.7993L90.3162 37.6735L90.3158 26.707L114.207 18.3388C116.025 17.702 117.242 15.9857 117.242 14.0592C117.242 11.5549 115.212 9.52469 112.708 9.52469H90.3162V0.159058Z"
						fill="#A8A5F5"
					/>
					<path d="M127 40.7433H90.3179V50.1089H127V40.7433Z" fill="#6C42C5" />
				</svg>
			</span>
			, a profitable VC-Backed company at the end of college, still in operation.
		</p>
	</div>
</Section>

	<!-- <section class="px-8 pt-12 text-md font-coolvetica">
				<div class="font-jump text-2xl">Things I like and dislike:</div>
				<div class="pl-6">
					<p>
						<span class="font-jump text-3xl">i</span> Like STM{' '}
						<span class="font-jump text-xl">{'>'}</span> Arduino
					</p>
					<p>
						<span class="font-jump text-3xl">I</span> Like Typescript{' '}
						<span class="font-jump text-xl">{'>'}</span> Javascript
					</p>
					<p>
						<span class="font-jump text-3xl">I</span> Like Julia{' '}
						<span class="font-jump text-xl">{'>'}</span> R
					</p>
	
					<p>
						<span class="font-jump text-3xl">I</span> Like Large Language Models
					</p>
					<p>
						<span class="font-jump text-3xl">I</span> Like VSCode
					</p>
					<p>
						<span class="font-jump text-3xl">I</span> Like Talmud
					</p>
					<p>
						<span class="font-jump text-3xl">I</span> Don't Like Driving (waiting for autonomous cars)
					</p>
					<p>
						<span class="font-jump text-3xl">I</span> Don't Like Disease (working on eliminating it)
					</p>
					<p>
						<span class="font-jump text-3xl">I</span> Don't Like Hoarding Wealth
					</p>
				</div>
			</section> -->
</main>
