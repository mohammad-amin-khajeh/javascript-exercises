const getTheTitles = function (books) {
	// my solution
	// return books.reduce((total, current) => total.concat(current.title), []);

	// a more concise solution
	return books.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
