import sanitizeHtml from 'sanitize-html';

/** We are using this to scrape the html from hebrewbooks.org
 * @param {string} masechet The masechet we are scraping
 * @param {number} daf The daf we are scraping
 * @param {number} page The page we are scraping, a=1 b=2
 * @returns {string} The html of the page
 */
export async function getHtml(
	masechet: string,
	daf: number,
	page: number
): Promise<string> {
	const secondPage = page === 2 ? 'b' : '';
	const constructedUrl = `https://hebrewbooks.org/shas.aspx?mesechta=${convertMasechetToNumber(
		masechet
	)}&daf=${daf}${secondPage}&format=text`;
	// fetch the html from the url
	const response = await fetch(constructedUrl);
	const clean = sanitizeHtml(await response.text());
	console.log(clean);
	// return the html
	return clean;
}

function convertMasechetToNumber(masechet: string): number {
	const masechtos = {
		Berachos: 1,
		Shabbos: 2,
		Eruvin: 3,
		Pesachim: 4,
		Shekalim: 5,
		Yoma: 6,
		Sukkah: 7,
		Beitzah: 8,
		RoshHashana: 9,
		Taanis: 10,
		Megillah: 11,
		MoedKatan: 12,
		Chagigah: 13,
		Yevamos: 14,
		Kesuvos: 15,
		Nedarim: 16,
		Nazir: 17,
		Gittin: 18,
		Kiddushin: 19,
		BavaKamma: 20,
		BavaMetzia: 21,
		BavaBasra: 22,
		Sanhedrin: 23,
		Makos: 24,
		Shevuos: 25,
		AvodahZarah: 26,
		Horayos: 27,
		Zevachim: 28,
		Menachot: 29,
		Chullin: 30,
		Bechoros: 31,
		Arachin: 32,
		Temurah: 33,
		Kerisos: 34,
		Meilah: 35,
		Tamid: 36,
		Middos: 37,
		Niddah: 38,
	};
	return masechtos[masechet];
}
