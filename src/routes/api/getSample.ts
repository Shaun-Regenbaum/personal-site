// The actual fetch
import { json } from 'solid-start';
import { getHtml } from '~/lib/hebrewbooks';

export async function GET() {
	const result = await getHtml('Berachos', 15, 1);
	return json(result);
}
