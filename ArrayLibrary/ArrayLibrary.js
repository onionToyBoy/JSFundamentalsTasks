const arrayLibruary = {
	myMap(arr, callback) {
		var result = [];
		for (var i = 0; i < arr.length; i++) {
			result.push(callback(arr[i]));
		}
		return result;
	},

	myFilter(arr, callback) {
		var result = [];
		for (var i = 0; i < arr.length; i++) {
			if (!callback(arr[i])) {
				continue;
			}
			result.push(arr[i]);
		}
		return result;
	},

	myForEach(arr, callback) {
		for (var i = 0; i < arr.length; i++) {
			callback(arr[i]);
		}
	},

	myReduce(arr, callback, initialValue) {
		var result = initialValue === undefined ? undefined : initialValue;
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
