// Write your Bird type here! ✨

export type Bird = {
	dangerous?: boolean;
	diet?: string;
	name: string;
	noisy?: boolean;
	intelligent?: boolean;
};

export const birds: Bird[] = [
	{
		dangerous: true,
		diet: "omnivore",
		name: "White-Throated Magpie-Jay",
		noisy: true,
	},
	{
		diet: "omnivore",
		intelligent: true,
		name: "Eurasian Magpie",
	},
	{
		diet: "carnivore",
		name: "Yellow-Billed Blue Magpie",
		noisy: true,
	},
	{
		intelligent: true,
		diet: "omnivore",
		name: "American Crow",
	},
];
