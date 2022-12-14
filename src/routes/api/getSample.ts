// The actual fetch
import { json } from 'solid-start';
import { getHtml } from '~/lib/hebrewbooks';

export async function GET() {
	const { main, rashi, tosafot } = await getHtml('Berachos', 42, 2);
	return json({ main, rashi, tosafot });
}
