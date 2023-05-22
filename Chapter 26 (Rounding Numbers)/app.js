//------------Chapter 26 (Rounding Numbers)-----------


// 1. Form a statement that rounds a number to the nearest integer.
var num = 3.7;
var roundedNum = Math.round(num);

// 2. Round up a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.
var origNum = 3.2;
var roundNum = Math.ceil(origNum);

// 3. Round down a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.
var origNum = 3.9;
var roundNum = Math.floor(origNum);

// 4. Round a number represented by a variable and assign the result
// to a second variable that hasn't been declared beforehand.
var roundedNum = Math.round(num);

// 5. Round .5 to 0 and assign it to a variable that hasn't been declared
// beforehand.
var roundedValue = Math.round(0.5);