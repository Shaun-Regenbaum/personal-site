import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const body = await request.formData();
		let page = body.get('page');
		// Replace spaces with underscores
		page = page?.toString().replace(/ /g, '_');
		const url = `https://www.sefaria.org/api/texts/Mishneh_Torah%2C_${page}?context=0`;
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		console.log('Finished');
		const data = await response.json();
		console.log(data);
		return data;
	}
};
