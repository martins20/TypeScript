// Lets create a  function for add 2 numbers (important, has to be a NUMBER here)
function add(number1: number, number2: number) {
  return number1 + number2;
}

console.log(add(5, 2.8));

// 1º Note:  if we put '5' and 2.8 the output is gone be 52.8
// 2º (this is because the number 5 is a string type .. and the normal action of this function is add. so, if there is a string between 2 numbers, then it will be concat)
// 3º Below we add a type number for function only accept parameters if it is a number.
//      function add(number1: number, number2: number) { return number1 + number2; }
