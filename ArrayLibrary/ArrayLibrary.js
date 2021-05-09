var typeError = new TypeError('invalid arguments');
var rangeError = new RangeError(
	'second argument does not fall within valid range'
);

var arrayLibruary = {
	myMap(arr, callback) {
		if (arr.__proto__ !== Array.prototype || typeof callback !== 'function') {
			return typeError;
		}
		var result = [];
		for (var i = 0; i < arr.length; i++) {
			result.push(callback(arr[i]));
		}
		return result;
	},

	myFilter(arr, callback) {
		if (arr.__proto__ !== Array.prototype || typeof callback !== 'function') {
			return typeError;
		}
		var result = [];
		for (var i = 0; i < arr.length; i++) {
			if (callback(arr[i])) {
				result.push(arr[i]);
			}
		}
		return result;
	},

	myForEach(arr, callback) {
		if (arr.__proto__ !== Array.prototype || typeof callback !== 'function') {
			return typeError;
		}
		for (var i = 0; i < arr.length; i++) {
			callback(arr[i]);
		}
	},

	myReduce(arr, callback, initialValue) {
		if (arr.__proto__ !== Array.prototype || typeof callback !== 'function') {
			return typeError;
		}
		var result = initialValue;
		for (var i = 0; i < arr.length; i++) {
			if (result !== undefined) {
				result = callback(result, arr[i]);
			} else {
				result = arr[i];
			}
		}
		return result;
	},
};
