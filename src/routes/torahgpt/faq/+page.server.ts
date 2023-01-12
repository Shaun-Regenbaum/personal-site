import { v4 as uuid } from 'uuid';
import { hog } from '$lib/db';
export function load({ request }: { request: any }) {
	const id = uuid();

	hog.capture({
		distinctId: id,
		event: 'FAQ Loaded',
		properties: {
			$current_url: 'https://shaunregenbaum.com/torahgpt/faq'
		}
	});
	return;
}
