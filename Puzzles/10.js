function multiplicationAllParams(...params) {
	if (params.includes(0)) {
		return 0;
	};
	let result = params.reduce((acc, el) => acc * el);
	return result;
};
