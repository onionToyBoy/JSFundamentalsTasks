const typeError = new TypeError('invalid argument');

function averageOfEven(arr) {
	if (arr.__proto__ !== Array.prototype) return typeError;
	let size = 0;
	let result = 0;
	arr.forEach((el) => {
		if (el % 2 === 0) {
			size++;
			result += el;
		}
	});

	return result / size;
}
