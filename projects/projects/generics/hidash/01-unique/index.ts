// Write your unique function here! ✨
// You'll need to export it so the tests can run it.
// Learning Generics

export function unique<Type>(...allItems: Type[][]) {
	const found = new Set<Type>();

	for (const items of allItems) {
		for (const item of items) {
			found.add(item);
		}
	}

	return Array.from(found);
}
