import Nav from '~/components/Nav';

export default function Home() {
	return (
		<div>
			<Nav startIndex={1}></Nav>
			<main class='mx-auto h- bg-gray-800 h-full text-white'>
				<section class='pl-12 pt-12'>
					<h1 class='font-coolvetica text-white text-3xl sm:text-5xl'>I am</h1>
					<br></br>
					<h2 class='font-pixel text-white text-xl sm:text-3xl'>
						Shaun Regenbaum
					</h2>
				</section>
				<section class='pl-16 sm:pl-20 pt-12'>
					<h3>
						My family is from Johanessburg, South Africa.
						<span class='text-3xl'> 🇿🇦</span>
					</h3>
					<h3>
						I grew up in Atlanta, Georgia.<span class='text-3xl'> 🇺🇸</span>
					</h3>
					<h3>
						I now live in Jerusalem, Israel.<span class='text-3xl'> 🇮🇱</span>
					</h3>
				</section>
				<section class='pl-16 sm:pl-20 pt-12'>
					<h3>
						I am an <span class='font-threeam text-3xl'>engineer.</span>
					</h3>
					<h3>
						And a <span class='font-science text-3xl'>researcher.</span>
					</h3>
					<br></br>
				</section>
				<section class='pl-12 pt-12'>
					<p class='align-bottom'>
						Paid for <span class='font-threeam'>College</span> by selling my
						first <span class='font-threeam'>Business</span> in high school.
					</p>
					<p>
						Co-founded the first funded student-led lab at{' '}
						<span class='font-science text-lg'>Georgia Tech</span>,
						<div class='pl-2'>
							<span class='font-aorell'>
								<div>The</div>
								<div class='pl-4'>Talmud</div>
								<div class='pl-12'>
									Lab,{' '}
									<span class='font-sans align-bottom'>
										with my friend Dan Jutan.
									</span>
								</div>
							</span>
						</div>
					</p>
					<p>
						Published my first paper in{' '}
						<span class='font-science text-lg'>Science</span>.
					</p>
					<p>
						Worked in Nahmias Lab at HU (cultivated meat and tissue-on-a-chip
						technologies).
					</p>
					<p>Worked on population genomics at Georgia Tech.</p>{' '}
					<p>
						Founded 402, a VC-Backed company at the end of college, still in
						business.
					</p>
				</section>
				<section class='pl-12 pt-12'>
					<p>
						{' '}
						Like <span class='font-steamy text-xl'>S T M</span> {'>'} Arduino
					</p>
					<p>Like Julia {'>'} R</p>
					<p>Like Typescript {'>'} Javascript</p>
					<p>Like GPT3</p>
					<p>Like VSCode</p>
					<p>Like Talmud</p>
					<p>Don't like driving (waiting for autonomous cars)</p>
					<p>Don't like disease (working on eliminating it)</p>
					<p>Don't like hoarding wealth</p>
				</section>
				<section class='pl-12 pt-12'>
					<h1>Education:</h1>
					<h3>Hebrew University</h3>
					<h3>Georgia Tech</h3>
					<h1>Awards:</h1>
					<h3>Zell Miller Scholarship</h3>
					<h3>Towers Award</h3>
					<h3>Breakthrough Challenege Finalist</h3>
				</section>
			</main>
		</div>
	);
}
