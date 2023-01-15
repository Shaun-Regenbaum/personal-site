import { v4 as uuid } from 'uuid';
import { hog } from '$lib/db';
export function load() {
	const id = uuid();

	hog.capture({
		distinctId: id,
		event: 'TorahGPT Loaded',
		properties: {
			$current_url: 'https://shaunregenbaum.com/torahgpt'
		}
	});
	return;
}
