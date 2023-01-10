import { json } from '@sveltejs/kit';

export async function POST({ request }: any) {
	const body = await request.json();
	const url = `https://www.sefaria.org/api/texts/Rashi_on_${body.ref}.${body.page}${body.side}.${body.index}?context=0`;
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	console.log('Finished');
	const data = await response.json();
	return json(data);
}
