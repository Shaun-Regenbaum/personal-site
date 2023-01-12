import { json } from '@sveltejs/kit';
import { createTranslation } from '$lib/openai';
import { hog } from '$lib/db';
import { v4 as uuid } from 'uuid';

export async function POST({ request }: any) {
	const debug: boolean = true;
	const body = await request.json();
	const { aramaic, english, word } = body;
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
		event: 'Translation Used',
		properties: {
			aramaic: aramaic,
			english: english,
			word: word,
			ip: ip,
			$current_url: 'https://shaunregenbaum.com/translation'
		}
	});

	const translation = await createTranslation(aramaic, english, word, debug);
	return json(translation);
}
