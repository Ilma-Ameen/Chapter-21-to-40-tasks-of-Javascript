// Chapter 30 (Controlling the length of
// decimals)


// 1. Code a statement that rounds a number represented by num to 4
// places, converts it to a string, and assigns it to newNum, which
// hasn't been declared beforehand.
var num = "1.667887";
var newnum = num.toFixed(4).toString();
console.log(num);


// 2. In a single statement round a number represented by a variable to
// 2 places, convert it to a string, convert it back to a number, and
// assign it to the same variable.
var newNum = Number(num.toFixed(4).toString());


// 3. Code the first line of an if statement that tests whether the
// number represented by num, rounded to 2 digits and converted
// to a string, has more than 4 characters in it.
if (num.toFixed(2).toString().length > 4) {
  }

  
// 4. Assign a number with many decimal places to a variable.
// Code an alert that displays the number rounded to 2 decimal
// places and converted to a string.
var number = 3.141592653589793238;
var roundedNumber = number.toFixed(2).toString();
alert(roundedNumber);