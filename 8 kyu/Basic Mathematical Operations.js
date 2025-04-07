// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// 3 p--> 1. operator string, 2 & 3. Positive number
// return - number(positive number)

// need to check string & number -- if condition
//

function basicOp(operation, value1, value2) {
  //Code
  switch (operation) {
    case "+":
      return value1 + value2;
      break;
    case "-":
      return value1 - value2;
      break;
    case "*":
      return value1 * value2;
      break;
    case "/":
      return value1 / value2;
      break;

    default:
      break;
  }
}

console.log(basicOp("+", 4, 7 === 11));
console.log(basicOp("*", 5, 5) === 25);
console.log(basicOp("/", 49, 7) === 7);
