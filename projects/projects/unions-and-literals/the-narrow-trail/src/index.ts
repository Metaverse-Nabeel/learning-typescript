export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let nextSupply: "water" | "food" | undefined;
	let day: number = 1;
	let food: number = 5;
	let water: number = 5;

	for (day; day <= 7; day++) {
		let randomNumber: number = Math.ceil(Math.random() * 6);
		let command: "finish" | "food" | "water" | number;

		switch (randomNumber) {
			case 1:
				command = "food";
				break;

			case 2:
				command = "water";
				break;

			default:
				command = randomNumber;
				break;
		}

		if (typeof command === "number") {
			switch (nextSupply) {
				case "food":
					food += command;
					nextSupply = undefined;
					break;

				case "water":
					water += command;
					nextSupply = undefined;
					break;

				default:
					nextSupply = randomNumber % 2 === 0 ? "food" : "water";
					break;
			}
		}

		switch (command) {
			case "food":
				nextSupply = "food";
				break;

			case "water":
				nextSupply = "water";
				break;
		}

		food -= 1;
		water -= 1;

		if (food === 0 || water === 0) {
			return false;
		}
	}

	return true;
}
