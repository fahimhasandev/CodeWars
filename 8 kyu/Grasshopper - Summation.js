// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

//if the number takes 2 --> 1 + 2 = 3

//Parameter---> number
//Return --> sum of the number starting from 1 to that (N)Number
//Example --> 1 -3 + 4 --> 5
//Psudo code-->
// 1. check the number is positive or negative
// 2. it will start from 1 up to the number --> n + 1
// 3. conditional
// 4  loop
// 4. log

const summation = function (num) {
  // Code here
  if (num > 0) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      count = count + i;
    }
    return count;
  }
};

console.log(summation(-4) === 10); //false
console.log(summation(4) === 10); // true
