const typeError = new TypeError('invalid arguments');
const rangeError = new RangeError(
	'second argument does not fall within valid range'
);

function isArray(obj) {
	const result = obj.__proto__ === Array.prototype ? true : false;
	return result;
}

function isBoolean(obj) {
	const result = obj.__proto__ === Boolean.prototype ? true : false;
	return result;
}

function isDate(obj) {
	const result = obj.__proto__ === Date.prototype ? true : false;
	return result;
}

function isNumber(obj) {
	const result = obj.__proto__ === Number.prototype ? true : false;
	return result;
}

function isString(obj) {
	const result = obj.__proto__ === String.prototype ? true : false;
	return result;
}

function isFunction(obj) {
	const result = obj.__proto__ === Function.prototype ? true : false;
	return result;
}

function isUndefined(obj) {
	const result = obj === undefined ? true : false;
	return result;
}

function isNull(obj) {
	const result = obj === null ? true : false;
	return result;
}

function first(arr) {
	return arr[0];
}

function last(arr) {
	return arr[arr.length - 1];
}

function skip(arr, number) {
	if (number < 0 || number >= arr.length) {
		console.error(rangeError);
		return rangeError;
	}
	if (!isArray(arr) || !isNumber(number)) {
		console.error(typeError);
		return typeError;
	}
	const result = [];
	for (let i = number; i < arr.length; i++) {
		result.push(arr[i]);
	}
	return result;
}

function take(arr, number) {
	if (number < 0 || number >= arr.length) {
		console.error(rangeError);
		return rangeError;
	}
	if (!isArray(arr) || !isNumber(number)) {
		console.error(typeError);
		return typeError;
	}
	const result = [];
	for (let i = 0; i < number; i++) {
		result.push(arr[i]);
	}
	return result;
}

function asChain(arr) {
	const newObj = {
		skip(number) {
			const result = [];
			for (let i = number; i < this.arr.length; i++) {
				result.push(arr[i]);
			}
			this.arr = result;
			return this;
		},
		take(number) {
			const result = [];
			for (let i = 0; i < number; i++) {
				result.push(this.arr[i]);
			}
			this.arr = result;
			return this;
		},
		getArr() {
			return this.arr;
		},
	};
	newObj.arr = arr;
	return newObj;
}
