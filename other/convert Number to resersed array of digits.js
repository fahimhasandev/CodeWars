// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

// Ways to convert a number to a string and vice versa

// toString() and parseInt()
// String() and Number()
// unary + operator
// multiply by 1
// Loop
function digitize(n) {
  const answer = [];
  const str = n.toString();

  for (item of str) {
    answer.unshift(parseInt(item));
  }

  return answer;
}
// Array.from
function digitize(n) {
  const str = n.toString();
  const intConverter = (item) => parseInt(item);
  return Array.from([...str].reverse(), intConverter);
}
// Let's make this solution a little bit shorter.

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}
// Map
function digitize(n) {
  return ('' + n)
    .split('')
    .map((el) => el * 1)
    .reverse();
}
