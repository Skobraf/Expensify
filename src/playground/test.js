const book = {
	title: "ego is the enemy",
	atuhor: 'ryan holiday',
	publisher: {
		name: "Penguin"
	}
};

const {name: publisherName} = book.publisher;
console.log(`${publisherName}`);