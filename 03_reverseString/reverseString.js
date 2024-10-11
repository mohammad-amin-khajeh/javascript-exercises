const reverseString = function (myStr) {
	let revStr = "";
	for (let i = myStr.length - 1; i >= 0; i--) {
		revStr += myStr[i];
	}
	return revStr;
};

// Do not edit below this line
module.exports = reverseString;
