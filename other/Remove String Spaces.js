// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.split(' ').join('');
}

// another solution
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/solutions/javascript
const noSpace = (x) => x.replace(/ /g, '');

//another
const noSpace = (x) => x.replace(/ /g, '');
