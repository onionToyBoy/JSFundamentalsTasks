function curry(F) {
	return function (a) {
		return function (b) {
			return function (c) {
				return F(a, b, c);
			};
		};
	};
}
