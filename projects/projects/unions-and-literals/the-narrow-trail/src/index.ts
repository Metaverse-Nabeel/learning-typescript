export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let available_resources: "water" | "food" | undefined;
	let day: number = 1;
	let food: number = 5;
	let water: number = 5;

	for (day; day <= 7; day++) {
		let randomNumber: number = Math.ceil(Math.random() * 6);
		if (randomNumber === 1) {
			food++;
		} else if (randomNumber === 2) {
			water++;
		} else {
			if (available_resources == undefined) {
				if (randomNumber % 2 == 0) {
					available_resources = "food";
					break;
				} else {
					available_resources = "water";
					break;
				}
			}
			if (available_resources === "water") {
				// water += randomNumber;
				water = water + randomNumber;
				available_resources = undefined;
			} else {
				food = food + randomNumber;
				available_resources = undefined;
			}
		}

		food -= 1;
		water -= 1;

		if (food === 0 || water === 0) {
			return false;
		}
	}

	return true;
}
