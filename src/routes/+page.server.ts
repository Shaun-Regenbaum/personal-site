import { v4 as uuid } from 'uuid';
import { hog } from '$lib/db';
export function load({ request }: { request: any }) {
	const id = uuid();
	let ip = null;
	try {
		ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
		console.log(ip);
	} catch (e) {
		ip = 'unknown';
		console.log(e);
	}
	hog.capture({
		distinctId: id,
		event: 'Main Loaded',
		properties: {
			ip: ip,
			$current_url: 'https://shaunregenbaum.com/'
		}
	});
	return;
}
