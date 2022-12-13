import ListItem from '~/components/ListItem';
import Nav from '~/components/Nav';

export default function Home() {
	return (
		<div>
			<Nav startIndex={1}></Nav>
			<main class='mx-auto bg-gray-800 h-screen text-white'>
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
					<h1>Experience:</h1>
					<h1>Research:</h1>
					<h1>Awards:</h1>
				</section>
			</main>
		</div>
	);
}
