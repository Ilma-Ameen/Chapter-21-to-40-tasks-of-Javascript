//-----------Chapter 27 (Random Numbers)-----------


// 1. Convert a random number generated by JavaScript to a number in
// the range 1 to 50
var randomNum = Math.floor(Math.random() * 50) + 1;


// 2. Generate a random number and assign it to a variable that hasn't
// been declared beforehand.
var randomNumber = Math.random();


// 3. You have to create a dice in JavaScript with the use of pseudorandom number.
var diceRoll = Math.floor(Math.random() * 6) + 1;


// 4. You have to create a toss (head/tail) in JavaScript with the use of
// pseudo-random number.
var coinToss = Math.random() < 0.5 ? "Heads" : "Tails";
