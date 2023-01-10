import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const body = await request.formData();
		const page = body.get('page');
		const side = body.get('side');
		const ref = body.get('ref');
		const url = `https://www.sefaria.org/api/texts/${ref}.${page}${side}?context=0`;
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		console.log('Finished');
		const data = await response.json();
		console.log(data.text);
		return data;
	}
};
