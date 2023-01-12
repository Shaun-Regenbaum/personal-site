import { v4 as uuid } from 'uuid';
import { hog } from '$lib/db';
export function load(): { request: any }) {
	const id = uuid();
	hog.capture({
		distinctId: id,
		event: 'Main Loaded',
		properties: {
			$current_url: 'https://shaunregenbaum.com/'
		}
	});
	return;
}
