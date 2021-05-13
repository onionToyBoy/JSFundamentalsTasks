function memo(fn) {
	const cache = {};

	return (n) => {
		if (n in cache) {
			return cache[n];
		}
		return (cache[n] = fn(n));
	};
}
