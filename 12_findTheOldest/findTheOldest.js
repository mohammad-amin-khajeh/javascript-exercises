const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  return people.reduce((oldest, current) => (oldest.yearOfDeath ?? currentYear) - oldest.yearOfBirth > (current.yearOfDeath ?? currentYear) - current.yearOfBirth ? oldest : current , 0);
};

// Do not edit below this line
module.exports = findTheOldest;
