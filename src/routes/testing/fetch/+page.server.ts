export async function load(): Promise<any> {
	const response = await fetch('https://www.youtube.com/watch?v=1t5oYKEn-1E');
	return JSON.parse(await response.clone().text());
}
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const url = data.get('url');
		const response = await fetch(url);
		return JSON.parse(await response.clone().text());
	}
};
