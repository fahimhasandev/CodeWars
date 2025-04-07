// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1(sqare 1) + 2(square 2) + 2(square 2) = 9

// solution - 1:
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

//   solu -2:
function squareSum(numbers) {
  var sum = 0;
  numbers.forEach(function (n) {
    sum += n * n;
  });
  return sum;
}

//   solu-3:
function squareSum(numbers) {
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i] * numbers[i];
  }
  return result;
}
