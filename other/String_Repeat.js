/* Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
P.
R.
E.
P.
Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/



// Solution 1:
function repeatStr (n, s) {
  var str="";
  for(var i=0; i < n; i++)
    str+=s;
    return str;
  }


  //solution 2
  function repeatStr2 (n, s) {
    return s.repeat(n);
  }