<script lang="ts">
	import Nav from '$lib/Nav.svelte';
</script>

<div>
	<Nav startIndex={1} />
	<main class=" bg-gray-800 h-full text-white">
		<section class="pl-12 pt-12">
			<h1 class="font-coolvetica text-white text-3xl sm:text-5xl">I am</h1>
			<br />
			<h2 class="font-pixel text-white text-xl sm:text-3xl">Shaun Regenbaum</h2>
		</section>
		<section class="pl-16 sm:pl-20 pt-12">
			<h3>
				My family is from Johanessburg, South Africa.
				<span class="text-3xl"> 🇿🇦</span>
			</h3>
			<h3>
				I grew up in Atlanta, Georgia.<span class="text-3xl"> 🇺🇸</span>
			</h3>
			<h3>
				I now live in Jerusalem, Israel.<span class="text-3xl"> 🇮🇱</span>
			</h3>
		</section>
		<section class="pl-20 sm:pl-28 pt-12">
			<h3>
				I am an <span class="font-threeam text-3xl">engineer.</span>
			</h3>
			<h3>
				And a <span class="font-science text-3xl">researcher.</span>
			</h3>
			<br />
		</section>
		<section class="pl-12 pt-12">
			<p class="align-bottom">
				Paid for <span class="font-threeam">College</span> by selling my first
				<span class="font-threeam">Business</span> in high school.
			</p>
			<div />
			<p>
				Co-founded the first funded student-led lab at{' '}
				<span class="font-science text-lg">Georgia Tech</span>,
			</p>
			<div class="pl-2">
				<span class="font-aorell">
					<div>The</div>
					<div class="pl-4">Talmud</div>
					<div class="pl-12">
						Lab,{' '}
						<span class="font-sans align-bottom"> with my friend Dan Jutan. </span>
					</div>
				</span>
			</div>
			<br />
			<p>
				Published my first paper in{' '}
				<span class="font-science text-lg">Science</span>.
			</p>
			<p>
				Worked in Nahmias Lab at HU (
				<span class="font-threeam">Cultivated Meat</span> and{' '}
				<span class="font-threeam">Tissue-on-a-chip</span>).
			</p>
			<p>
				Worked on population genomics at{' '}
				<span class="font-science text-lg">Georgia Tech</span>.
			</p>
			{' '}
			<p>
				Founded{' '}
				<span>
					<svg
						viewBox="0 0 127 51"
						width="48px"
						height="48px"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="inline align-middle"
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
		</section>
		<section class="pl-12 pt-12">
			<p>
				<span class="font-steamy text-3xl">I</span> Like STM{' '}
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
				<span class="font-jump text-3xl">I</span> Don't like driving (waiting for autonomous cars)
			</p>
			<p>
				<span class="font-jump text-3xl">I</span> Don't like disease (working on eliminating it)
			</p>
			<p>
				<span class="font-jump text-3xl">I</span> Don't like hoarding wealth
			</p>
		</section>
		<br />
		<div class="flex flex-row justify-center items-center">
			<p class=" pl-4 font-rainy text-2xl">
				This site still a work in Progress and will be updated later...
			</p>
		</div>
	</main>
</div>
