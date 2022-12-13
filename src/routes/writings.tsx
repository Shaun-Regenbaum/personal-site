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

			<ListItem {...SamplePost}></ListItem>
			<ListItem {...SamplePost}></ListItem>
			<ListItem {...SamplePost}></ListItem>
		</div>
	);
}
