import Logo from '~/components/Logo';
import Nav from '~/components/Nav';

export default function Home() {
	return (
		<>
			<Nav startIndex={1}></Nav>
			<main class=' bg-gray-800 h-full text-white'>
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
				<section class='pl-20 sm:pl-28 pt-12'>
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
					<br></br>
					<p>
						Published my first paper in{' '}
						<span class='font-science text-lg'>Science</span>.
					</p>
					<p>
						Worked in Nahmias Lab at HU (
						<span class='font-threeam'>Cultivated Meat</span> and{' '}
						<span class='font-threeam'>Tissue-on-a-chip</span>).
					</p>
					<p>
						Worked on population genomics at{' '}
						<span class='font-science text-lg'>Georgia Tech</span>.
					</p>{' '}
					<p>
						Founded{' '}
						<span>
							<Logo></Logo>{' '}
						</span>
						, a profitable VC-Backed company at the end of college, still in
						operation.
					</p>
				</section>
				<section class='pl-12 pt-12'>
					<p>
						<span class='font-steamy text-3xl'>I</span> Like STM{' '}
						<span class='font-jump text-xl'>{'>'}</span> Arduino
					</p>
					<p>
						<span class='font-jump text-3xl'>I</span> Like Typescript{' '}
						<span class='font-jump text-xl'>{'>'}</span> Javascript
					</p>
					<p>
						<span class='font-jump text-3xl'>I</span> Like Julia{' '}
						<span class='font-jump text-xl'>{'>'}</span> R
					</p>

					<p>
						<span class='font-jump text-3xl'>I</span> Like Large Language Models
					</p>
					<p>
						<span class='font-jump text-3xl'>I</span> Like VSCode
					</p>
					<p>
						<span class='font-jump text-3xl'>I</span> Like Talmud
					</p>
					<p>
						<span class='font-jump text-3xl'>I</span> Don't like driving
						(waiting for autonomous cars)
					</p>
					<p>
						<span class='font-jump text-3xl'>I</span> Don't like disease
						(working on eliminating it)
					</p>
					<p>
						<span class='font-jump text-3xl'>I</span> Don't like hoarding wealth
					</p>
				</section>
				<br></br>
				<div class='flex flex-row justify-center items-center"'>
					<p class=' pl-4 font-rainy text-2xl'>
						This site still a work in Progress and will be updated later...
					</p>
				</div>
			</main>
		</>
	);
}
