// Write your classes here! ✨
// You'll need to export them so the tests can run them.
interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}
export abstract class Horror {
	#consumed: Consumed[] = [];

	#consume(opponent: Horror) {
		this.#consumed.push({
			evil: opponent.isEvil(),
			name: opponent.name,
			power: opponent.getPower(),
		});
	}

	abstract readonly name: string;
	doBattle(opponent: Horror) {
		if (this.getPower() >= opponent.getPower()) {
			this.#consume(opponent);
		}
	}

	getPower() {
		return this.#consumed.reduce(
			(previous, consumed) => previous + this.getPowerFrom(consumed),
			this.#consumed.length
		);
	}

	protected abstract getPowerFrom(consumed: Consumed): number;

	protected abstract isEvil(): boolean;
}

export abstract class Demon extends Horror {
	readonly name: string = "Demon";

	getPowerFrom(consumed: Consumed) {
		return consumed.evil ? consumed.power / 2 : consumed.power * 2;
	}

	isEvil() {
		return true;
	}
}

export abstract class Sorcerer extends Horror {
	readonly name: string;
	#evil: boolean;

	constructor(name: string, evil: boolean) {
		super();
		this.name = name;
		this.#evil = evil;
	}

	getPowerFrom(consumed: Consumed) {
		return consumed.evil === this.#evil ? consumed.power * 2 : consumed.power;
	}

	isEvil() {
		return this.#evil;
	}
}
