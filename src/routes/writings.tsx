import ListItem from '~/components/ListItem';
import Nav from '~/components/Nav';

const SamplePost = {
	tag: 'Poem',
	author: 'Me',
	title: 'Lindsay Walton',
	url: new URL('https://app.rssapi.net/app?id=144'),
	created_at: new Date(),
};

export default function Writings() {
	return (
		<div>
			<Nav startIndex={2}></Nav>
			<br></br>
			<div class='flex flex-row justify-center items-center"'>
				<p class=' pl-4 font-rainy text-2xl'>
					This page is still a work in progress and will be updated later...
				</p>
			</div>

			<ListItem {...SamplePost}></ListItem>
			<ListItem {...SamplePost}></ListItem>
		</div>
	);
}
