// Chapter 28, 29 (Converting Strings)
// 1. How do you convert a string to an integer in JavaScript?
var str = parseInt("43");
var str = Number("43");
var str = +("43");
// 2. Write a JavaScript function to convert the string "123" to an
// integer.
var str = +("123");
// 3. How can you convert a string containing a decimal number to a
// floating-point number in JavaScript?
var decimalStr = "3.14";
var floatNum = parseFloat(decimalStr);
console.log(floatNum);
// 4. How can you check if a string can be successfully converted to an
// integer or decimal in JavaScript before performing the
// conversion?
var str = "123";

if (!isNaN(Number(str))) 
{
  var integerNum = parseInt(str);
  console.log(integerNum);
}

var decimalStr = "3.14";

if (!isNaN(Number(decimalStr))) 
{
  var floatNum = parseFloat(decimalStr);
  console.log(floatNum);
}
// 5. How can you convert a number to a string in JavaScript?

var num = 123;
var num1 = num.toString();
console.log(num1);

// 6. Write a JavaScript function to convert the number 42 to a string.

var num = 42;
var num1 = num.toString();
console.log(num1);
// 7. Can you convert a string representing a decimal number (e.g.,
// "3.14") to an integer in JavaScript? If so, how?
var decimalStr = "3.14";
var integerNum = parseInt(decimalStr);
console.log(integerNum);