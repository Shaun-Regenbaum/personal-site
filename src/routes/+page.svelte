<script>
	import Abbr from '$lib/components/Abbr.svelte';
	import Expandable from '$lib/components/Expandable.svelte';
</script>

<div class="w-full h-screen bg-slate-500 text-white">
	<main>
		<section class="pl-12 pt-12">
			<div
				class="bg-slate-400 border-l-4 border-b-4 border-r-2 border-t-2 w-fit min-w-[260px] p-8 mr-12 rounded-t-2xl rounded-b-md"
			>
				<h1 class="inline font-metropolis font-bold text-3xl sm:text-5xl">I am{' '}</h1>
				<h2 class="inline align-text-bottom font-aorell  text-3xl sm:text-5xl">
					{' '}Shaun Regenbaum
				</h2>
			</div>
		</section>
		<div class="flex flex-wrap">
			<Expandable title={'who'}>
				<div class="space-y-4">
					<h3>
						I am a <span class="font-aorell text-3xl align-bottom">religious Jew.</span>
					</h3>
					<h3>
						I am an <span class="font-threeam text-3xl">engineer.</span>
					</h3>
					<h3>
						I am a <span class="font-science text-3xl">researcher.</span>
					</h3>
				</div>
			</Expandable>
			<Expandable title={'where'}>
				<div class="space-y-4">
					<h3>
						My family hails from Johanessburg, South Africa.
						<span
							class="text-3xl align-middle bg-slate-300 px-2 pt-1 mx-1 rounded-lg border-2 border-slate-600"
							>{' '}🇿🇦</span
						>
					</h3>

					<h3>
						Grew up as a First Gen. American in Atlanta, Georgia.<span
							class="text-3xl align-middle bg-slate-300 pr-2 pt-1 mx-1 rounded-lg border-2 border-slate-600"
							>{' '}🇺🇸</span
						>
					</h3>
					<h3>
						Immigrated and now living in Jerusalem, Israel.<span
							class="text-3xl align-middle bg-slate-300 pr-2 pt-1 mx-1 rounded-lg border-2 border-slate-600"
							>{' '}🇮🇱</span
						>
					</h3>
				</div>
			</Expandable>
			<Expandable title={'what @college'}>
				<div class="">
					<p>
						Recepient of Zell-Miller Scholarship, a full-ride to <span class="font-science text-lg"
							>Georgia Tech</span
						>.
					</p>
					<div class="py-3">{' '}</div>
					<p>
						Co-founded the first funded student-led <a
							class="underline text-blue-200"
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
							<div class="pl-12">
								Lab,{' '}
								<span class="font-sans align-bottom">
									with my best friend <a
										class="underline text-blue-200"
										href="			https://github.com/Jutanium
										"
									>
										Dan Jutan</a
									>.
								</span>
							</div>
						</span>
					</div>
					<!-- <div class="py-3">{' '}</div> -->
					<!-- <p>Somehow graduated with a BS in Biomedical Engineering and Physics.</p> -->
				</div>
			</Expandable>

			<Expandable title={'what @research'}>
				<div class="space-y-4">
					<p>
						My first scientific <a
							class="underline text-blue-200"
							href="https://pubmed.ncbi.nlm.nih.gov/33627489/">paper</a
						>
						was published in{' '}
						<span class="font-science text-lg">Science</span>.
					</p>
					<p>
						I worked on <span class="font-threeam">Cultivated Meat</span> and{' '}
						<span class="font-threeam">Tissue-on-a-chip</span> tech at the
						<a class="underline text-blue-200" href="https://www.nahmias-lab.com"> Nahmias Lab </a>
						at <span class="font-science text-lg">HUJI.</span>
					</p>
					<p>
						Experimented with population genomics at{' '}
						<span class="font-science text-lg">Georgia Tech</span>.
					</p>
				</div>
			</Expandable>
			<Expandable title="what @business">
				<div class="space-y-4">
					<p class="align-bottom">
						Sold my first
						<span class="font-threeam">Business</span> in high school.
					</p>
					<p class="align-bottom">
						Worked in fields ranging from <Abbr abbr={'ED'} expanded={'Embedded Systems'} /> to <Abbr
							abbr={'ML'}
							expanded={'Machine Learning'}
						/>.
					</p>
					<p>
						Founded{' '}
						<span
							class="align-text-middle bg-slate-200 p-1 pt-2 ml-1 rounded-lg border-2 border-slate-600"
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
			</Expandable>

			<br />
			<!-- <section class="pl-12 pt-12 text-md font-coolvetica">
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
		</div>

		<div class="mb-10 flex flex-row justify-center items-center">
			<p class=" pl-4 font-rainy text-2xl pb-10">
				This site still a work in Progress and will be updated later...
			</p>
		</div>
	</main>
</div>
