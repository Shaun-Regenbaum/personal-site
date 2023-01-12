import { v4 as uuid } from 'uuid';
import { hog } from '$lib/db';
export function load({ request }: { request: any }) {
	const id = uuid();
	try {
		const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
		console.log(ip);
		hog.capture({
			distinctId: id,
			event: 'Main Loaded',
			properties: {
				ip: ip,
				$current_url: 'https://shaunregenbaum.com/'
			}
		});
	} catch (e) {
		console.log(e);
	}
	return;
}
