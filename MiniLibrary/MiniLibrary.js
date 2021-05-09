const typeError = new TypeError('invalid arguments');
const rangeError = new RangeError(
	'second argument does not fall within valid range'
);

function isArray(obj) {
	if (obj == null) return false;
	return obj.__proto__ === Array.prototype;
}

function isBoolean(obj) {
	if (obj == null) return false;
	return obj.__proto__ === Boolean.prototype;
}

function isDate(obj) {
	if (obj == null) return false;
	return obj.__proto__ === Date.prototype;
}

function isNumber(obj) {
	if (obj == null) return false;
	return obj.__proto__ === Number.prototype;
}

function isString(obj) {
	if (obj == null) return false;
	return obj.__proto__ === String.prototype;
}

function isFunction(obj) {
	if (obj == null) return false;
	return obj.__proto__ === Function.prototype;
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
	if (!isArray(arr)) return typeError;
	return arr[0];
}

function last(arr) {
	if (!isArray(arr)) return typeError;
	return arr[arr.length - 1];
}

function skip(arr, number) {
	if (!isArray(arr) || !isNumber(number)) {
		console.error(typeError);
		return typeError;
	}
	if (number < 0 || number >= arr.length) {
		console.error(rangeError);
		return rangeError;
	}
	const result = [];
	for (let i = number; i < arr.length; i++) {
		result.push(arr[i]);
	}
	return result;
}

function take(arr, number) {
	if (!isArray(arr) || !isNumber(number)) {
		console.error(typeError);
		return typeError;
	}
	if (number < 0 || number >= arr.length) {
		console.error(rangeError);
		return rangeError;
	}
	const result = [];
	for (let i = 0; i < number; i++) {
		result.push(arr[i]);
	}
	return result;
}

function asChain(arr) {
	if (!isArray(arr)) return typeError;
	const newObj = {
		array: arr,

		skip(number) {
			const result = [];
			for (let i = number; i < this.array.length; i++) {
				result.push(this.array[i]);
			}
			this.array = result;
			return this;
		},
		take(number) {
			const result = [];
			for (let i = 0; i < number; i++) {
				result.push(this.array[i]);
			}
			this.array = result;
			return this;
		},
		getArr() {
			return this.array;
		},
	};
	return newObj;
}
