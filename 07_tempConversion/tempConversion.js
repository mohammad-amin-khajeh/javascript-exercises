const convertToCelsius = function (fahrenheit) {
	const celcius = (fahrenheit - 32) * (5 / 9);
	return +celcius.toFixed(1);
  // I coul've just used:
  // return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celcius) {
	const fehrenheit = celcius * (9 / 5) + 32;
	return +fehrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
