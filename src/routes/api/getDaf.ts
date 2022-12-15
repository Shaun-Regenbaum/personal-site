// The actual fetch
import { json } from 'solid-start';
import { getHtml } from '~/lib/hebrewbooks';

export async function GET(params: { masechta: string }) {
	const masechta = params.masechta;
	const { main, rashi, tosafot } = await getHtml(masechta, 4, 2);
	return json({ main, rashi, tosafot });
}
