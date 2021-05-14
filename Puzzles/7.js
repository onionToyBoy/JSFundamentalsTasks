function lazy(fn, ...params) {
	let result;
	let done = false;
	return function () {
		if (done) return result;
		result = fn(...params);
		done = true;
		return result;
	};
}
