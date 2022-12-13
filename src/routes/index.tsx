import ListItem from '~/components/ListItem';
import Nav from '~/components/Nav';

const SamplePost = {
	tag: 'Poem',
	author: 'Me',
	title: 'Lindsay Walton',
	url: new URL('https://app.rssapi.net/app?id=144'),
	created_at: new Date(),
};

export default function Home() {
	return (
		<div>
			<Nav></Nav>
			<main class='mx-auto bg-gray-800 h-screen'>
				<section class='pl-12 pt-12'>
					<h1 class='font-coolvetica text-white text-5xl'>Welcome to all!</h1>
					<br></br>
					<h2 class='font-coolvetica text-white text-5xl'>I am</h2>

					<h2 class='font-pixel text-white text-3xl'>Shaun Regenbaum</h2>
					<ListItem {...SamplePost}></ListItem>
				</section>
			</main>
		</div>
	);
}
