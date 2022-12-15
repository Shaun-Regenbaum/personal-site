// import { createDate, createTimeAgo } from '@solid-primitives/date';
import { createMemo, Show } from 'solid-js';
import { A } from 'solid-start';

interface Post {
	title: string;
	author: string;
	tag: string;
	url: URL;
	created_at: Date;
	extra_stlying?: string;
}

export default function ListItem(props: Post) {
	// reducing the url to the domain name
	const tag = props.tag;
	const author = props.author;
	const domain = props.url.hostname.replace(/^www\./, '');
	const title = props.title;
	// const [myDate, setMyDate] = createDate(props.created_at);
	// const [timeago] = createTimeAgo(myDate);

	return (
		<div
			class={`overflow-hidden rounded-lg bg-white shadow ${props.extra_stlying}`}
		>
			<div class='px-4 py-5 sm:p-6'>
				<A
					href={props.url.href}
					class='text-lg leading-6 font-medium'
				>
					<span class='font-pixel align-middle'>{tag + ': '}</span>
					<span class='font-coolvetica text-2xl align-top'> {title}</span>
				</A>
				<p class='text-sm text-gray-500'>
					{' '}
					{author} | {'Yesterday'} |
					<Show when={domain !== null}>
						{' @ '}
						<span class='mt-1 max-w-2xl text-sm text-gray-500'>{domain}</span>
					</Show>
				</p>
			</div>
		</div>
	);
}
