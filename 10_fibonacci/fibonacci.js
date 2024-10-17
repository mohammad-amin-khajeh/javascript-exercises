const fibonacci = function (n) {
	n = +n;
	if (n < 0) return "OOPS";

	if (!n) return 0;

	let first = 1,
		second = 0;

	for (let _ = 2; _ <= n; _++) [first, second] = [first + second, first];

	return first;
};

// Do not edit below this line
module.exports = fibonacci;
