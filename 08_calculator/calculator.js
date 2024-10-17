const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (arr) {
	return arr.reduce((total, current) => total + current, 0);
};

const multiply = function (arr) {
	return arr.reduce((total, current) => total * current, 1);
};

const power = function (a, b) {
	return Array(b)
		.fill(a)
		.reduce((a, b) => a * b, 1);
};

const factorial = function (n) {
	let arr = [];
	for (let i = 1; i <= n; i++) arr.push(i);
	return multiply(arr);
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};

console.log(sum([4, 6]));
