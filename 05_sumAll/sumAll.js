const sumAll = function(start, end) {
  if (start > 0 || typeof start !== 'number' || Math.ceil(start) !== start) return "ERROR"
  if (end > 0 || typeof end !== 'number' || Math.ceil(end) !== end) return "ERROR"

  if (start > end) [start,end] = [end,start]

  let sum = 0
  for (let i = start; i <= end; i++) {
    sum += i
  }
  return sum

};

// Do not edit below this line
module.exports = sumAll;
