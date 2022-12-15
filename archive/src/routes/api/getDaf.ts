// The actual fetch
import { json, useSearchParams } from 'solid-start';
import { getHtml } from '~/lib/hebrewbooks';

export async function GET() {
	const [params] = useSearchParams();
	const masechta = params.masechta;
	const { main, rashi, tosafot } = await getHtml(masechta, 4, 2);
	return json({ main, rashi, tosafot });
}
