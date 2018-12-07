const book = {
	title: "ego is the enemy",
	atuhor: 'ryan holiday',
	publisher: {
		name: "Penguin"
	}
};

const {name: publisherName} = book.publisher;
console.log(`${publisherName}`);

const adress = ['1299 s junor', 'pheladelphia', 'Pannsaylvania', '19147'];

const [,, yourState] = adress;

console.log(`You are in ${city} ${state} `);

const item = ["cofee (hot)", "twoD", "twoFive"];
const [,,price] = item
console.log(`A medium coffe costs ${price} `)