function myFunction(sum) {
	return (...argsuments) => {
		sum(...argsuments);
	};
}