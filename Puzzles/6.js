const typeError = new TypeError('invalid argument');

function averageOfEven(arr) {
	if (arr.__proto__ !== Array.prototype) return typeError;
	let size = 0;
	const evens = arr
		.filter((el) => el % 2 === 0)
		.reduce((acc, el) => {
			size++;
			return acc + el;
		}, 0);
	return evens / size;
}
