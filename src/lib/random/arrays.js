function randomIndex(items) {
	return Math.floor(Math.random() * items.length);
}

function randomElement(items) {
	return items[randomIndex(items)];
}

export { randomIndex, randomElement };
