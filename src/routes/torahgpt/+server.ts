import { json } from '@sveltejs/kit';
import { db, hog } from '$lib/db';
import { v4 as uuid } from 'uuid';
import { createCompletion } from '$lib/openai';
export async function POST({ request }: any) {
	const id = uuid();

	const debug: boolean = false;
	const body = await request.json();
	const { question, indepth } = body;
	try {
		await db.connect();
	} catch (e) {
		if (debug) console.log(e);
	}
	db.set(`question:${id}`, question)
		.then(() => {
			if (debug) console.log('Question Stored');
		})
		.catch(() => {
			if (debug) console.log('Failure to Store Question');
		});

	const text = await createCompletion(question, indepth);

	hog.capture({
		distinctId: id,
		event: 'TorahGPT Answered',
		properties: {
			question: question,
			depth: indepth,
			$current_url: 'https://shaunregenbaum.com/torahgpt',
			answer: text
		}
	});

	console.log('event sent');
	db.set(`answer:${id}`, text.slice(4, -1))
		.then(() => {
			if (debug) console.log('Answer Stored');
		})
		.catch(() => {
			if (debug) console.log('Failure to Store Answer');
		});
	try {
		db.disconnect();
	} catch (e) {
		if (debug) console.log(e);
	}
	//Todo, store the answer
	return json(text);
}
