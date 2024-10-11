const removeFromArray = function (arr, ...args) {
	for (const arg of args) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] !== arg) continue;
			arr.splice(i, 1);
			// since we removed one element from the array we have to decrease the index by 1
			// otherwise we'd skip one which is undesirable
			i--;
		}
	}
	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
