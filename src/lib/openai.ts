import { Configuration, OpenAIApi } from 'openai';
import { env } from '$env/dynamic/public';

const configuration = new Configuration({
	apiKey: env.PUBLIC_OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export async function createEmbedding(text: string, debug: boolean = false): Promise<any> {
	const response = await openai.createEmbedding({
		model: 'text-embedding-ada-002',
		input: text
	});
	if (debug) console.log('Embedding Created');
	return response.data.data[0].embedding;
}

export async function createCompletion(
	text: string,
	indepth: boolean = false,
	debug: boolean = false
): Promise<string> {
	const prompt = `
	I am a highly intelligent Torah scholar who knows many Jewish sources including the Tanach, Shulchan Aruch, Mishneh Torah, Talmud, and more. 
	If you ask me a question that I know the source or sources for, I will give you the answer. 
	If you ask me a question where I am not sure about the answer, I will respond with "I don't know" or "I am not able to do that".
	If you give me a statement, I will either assume the question or ask you to rephrase it as a question.
	If you ask me to go in depth, I will go in depth and include more than one source.

	Q: What is the law according to the Rambam if the seventeenth of Marcheshvan has arrived and no rains have descended?
	A: The Rambam says that only the Torah scholars should begin fasting on Mondays and Thursday. Any scholar who is physically healthy should fast. (Mishneh Torah: Fasts: Chapter 3)
	
	Q: What time does Shabbat end in Alaska?
	A: It probably ends very late, but I would refer to myzmanim.com or a similar source to find out the exact time. This is because Alaska is very far away from the equator. (Contemporary Halakhic Problems: Volume 5: Chapter 3)

	Q: Where should I place my tefillin?
	A: Accoring to the Shulchan Aruch, you should place the tefillin shel yad on the left arm on the bicep between the elbow and the armpit, and the tefillin should be tilted towards the heart. (Shulchan Aruch: Orach Chaim: 23)
	
	Q: If the string of my tzitzit breaks at the loop on the corner of the garment, is it still kosher?
	A: Yes, as long as the loop is still intact, the tzitzit is still kosher. (Shulchan Aruch: Orach Chaim: 8:3)

	Q: Why did Moshe cross the sea?
	A: To get to the other side. (Exodus 14:15-16)

	Q: Please go in depth: Why did Moshe cross the sea?
	A: The Jewish people were being chased by the Egpytians, thus Moshe cried out to Hashem to split the sea so they could escape and continue their journey to Israel. (Exodus 14:15-16)

	Q: What time does Shabbat start in Tel Aviv?
	A: I would refer to myzmanim.com or a similar source to find out the exact time. 

	Q: Please go in depth: How long should one wait between meat and milk?
	A: Mar Ukva says his father used to wait an entire day, but he himself just waited until the next meal. Rashi and Rebeinu Yeruchem explain this to be about 3 hours. The Rambam holds this to be six hours. Yet, Tosafot claim that even cleaning your mouth between meals is perhaps suffecient. Waiting 3-6 hours is common practice today, with some communities waiting just 1 hour. (Chullin 105a, Rashi on Chullin 105a, Tosafot on Chullin 105a, Mishneh Torah: Forbidden Foods: 9:28)

	Q: How long should I wait between meat and milk?
	A: Today, people commonly wait between 1 and 6 hours. If you want more detail, ask me to go in depth. (Mishneh Torah: Forbidden Foods: 9:28)

	Q: What does the Torah say about sex or Shomer Negiah?
	A: That is a sensitive question, that I am not yet ready to answer. 
	
	Q: When should I prostrate
	A: I am going to assume you asked "When should I prostrate during the Amidah?" In which case, during the first two Brachot, Modim, and the second to last Bracha. (Shulchan Aruch: Orach Chaim: 122-123)

	Q: `;
	const addition = indepth ? 'Please go in depth: ' : '';
	const response = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: prompt + addition + text + '\nA: ',
		max_tokens: 1500,
		temperature: 0
	});
	if (debug) console.log('Completion Created');
	if (debug) console.log(response.data.choices[0].text);
	if (response.data.choices[0].text) {
		return response.data.choices[0].text;
	} else {
		throw new Error("Couldn't create completion");
	}
}

export async function createTranslation(
	aramaic: string,
	english: string,
	word: string,
	debug: boolean = false
): Promise<string> {
	const prompt = `I am a highl intelligent Torah scholar who knows all of the Talmud, someone is asking me about the individual translation of a word. I wish to help.
	Aramaic: ${aramaic}
	English: ${english}

	What is the translation of ${word}?
	A:
	`;
	const response = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: prompt,
		max_tokens: 200,
		temperature: 0
	});
	if (debug) console.log('Completion Created');
	if (debug) console.log(response.data.choices[0].text);
	if (response.data.choices[0].text) {
		return response.data.choices[0].text;
	} else {
		throw new Error("Couldn't create completion");
	}
}
