export interface DafData {
	main: string;
	rashi: string;
	tosafot: string;
}

export type Daf = {
	tractate: string;
	daf: string;
};

export type sentenceRange = {
	startDaf: Daf;
	startIndex: number | undefined;
	endDaf: Daf;
	endIndex: number | undefined;
};

export type connection = {
	title: string;
	author: string;
	type: 'modern' | 'traditional' | 'halakhah' | 'tanakh' | 'rashi' | 'tosafot';
	text: string;
	link: string;
	ref?: string;
};

export type commentary = 'rashi' | 'tosafot';

export type link = {
	daf: Daf;
	sentenceIndexStart: number;
	sentenceIndexEnd?: number;
	ref: string;
	category: string;
	title: {
		en: string;
		he: string;
	};
};
