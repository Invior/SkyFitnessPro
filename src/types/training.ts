export type TrainingType = {
	_id: string;
	images: {
	  cardImage: string;
	};
	nameRU: string;
	description: string;
	directions: string[];
	fitting: string[];
};

export type Exercise = [string, number];