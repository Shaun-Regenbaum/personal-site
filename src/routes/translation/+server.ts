import { json } from '@sveltejs/kit';
import { createTranslation } from '$lib/openai';
import { hog } from '$lib/db';
import { v4 as uuid } from 'uuid';

export async function POST({ request }: any) {
	const debug: boolean = true;
	const body = await request.json();
	const { aramaic, english, word } = body;
	const id = uuid();

	try {
		const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
		console.log(ip);
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
	} catch (e) {
		console.log(e);
	}

	const translation = await createTranslation(aramaic, english, word, debug);
	return json(translation);
}
