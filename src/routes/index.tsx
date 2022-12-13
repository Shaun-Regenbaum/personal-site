import ListItem from '~/components/ListItem';
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
					<h3>I am an engineer.</h3>
					<h3>I am a researcher.</h3>
					<h3>
						At the interface between mind-blowing science and commerical scale.
					</h3>
					<br></br>
					<h3>My family is from Johanessburg, South Africa.</h3>
					<h3>I grew up in Atlanta, Georgia.</h3>
					<h3>I now live in Jerusalem, Israel.</h3>
				</section>
				<section class='pl-12 pt-12'>
					<p> Paid for college by selling my first business in high school.</p>
					<p>Started the first funded student-led lab at Georgia Tech.</p>
					<p>Published first paper in Science.</p>
					<p>
						Worked in Nahmias Lab at HU (cultivated meat and tissue-on-a-chip
						technologies).
					</p>
					<p>Worked on population genomics at Georgia Tech.</p>{' '}
					<p>
						Founded 402, a VC-Backed company at the end of college, still in
						business.
					</p>
					<p> Like STM {'>'} Arduino</p>
					<p>Like Julia {'>'} R</p>
					<p>Like Typescript {'>'} Javascript</p>
					<p>Like GPT3</p>
					<p>Like VSCode</p>
					<p>Like Talmud</p>
					<p>Don't like driving (waiting for autonomous cars)</p>
					<p>Don't like disease (working on eliminating it)</p>
					<p>Don't like hoarding wealth</p>
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
