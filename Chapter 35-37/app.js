//---------------Chapter 35-37 (Function)------------

// 1. Code the first line of a function displayAlert.
function displayAlert(){
};

// 2. Code a function named askName that prompts the user to "Enter
// name" and assigns the answer to userName, which hasn't been
// declared beforehand.
function askName(){
    var userName = prompt("Enter your Name");
}

// 3. Code a function that calls 2 other functions.
function callTwoFunctions() {
    function1();
    function2();
}
function function1() {
    console.log("This is function1");
}
function function2() {
    console.log("This is function2");
}
callTwoFunctions();

// 4. Code a function that displays a prompt, "Enter name" and then
// displays the name in an alert. Call the function.
function yourname(){
    var userName = prompt("Enter your Name:");
    alert(userName);
}
yourname();

// 5. Code the first line of a function named concat that has 3
// parameters, the first three letters of the alphabet. Call that takes
// a variable, a string, and a number as arguments.
function concat(variable, str, num) {
}

// 6. Code a function that has 2 parameters. Concatenate them and
// assign the result to a variable that hasn't been declared
// beforehand.
function concatenate(str1, str2) {
    var concatenated = str1 + str2;
    console.log(concatenated);
  }
var result = concatenate("Hello, ", "world!");
console.log(result);

// 7. Code a function that has three parameters. Multiply them and
// assign them to a variable that hasn't been declared yet.
function multiplyThreeNumbers(num1, num2, num3) {
    var multiplied = num1 * num2 * num3;
    console.log(multiplied);
}
var result = multiplyThreeNumbers(2, 3, 4);
console.log(result);

// 8. Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.
function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    var average = sum / numbers.length;
    return average;
}
  
  var numberArray = [5, 10, 15, 20, 25];
  var averageValue = calculateAverage(numberArray);
  console.log(averageValue);

  // 9. Write a JavaScript function that takes two parameters and returns
// their sum.
function addNumbers(a, b) {
    return a + b;
  }
  
  var number1 = 5;
  var number2 = 10;
  var sum = addNumbers(number1, number2);
  console.log(sum);

  // 10. Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.
function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    var average = sum / numbers.length;
    console.log(average);
}
  
  var numberArray = [5, 10, 15, 20, 25];
  var averageValue = calculateAverage(numberArray);
  console.log(averageValue);

  // 11. You have to capture the returned value from a function and
// store it in a variable?
function addNumbers(a, b) {
    var result = a + b;
    console.log(result);
}
addNumbers(5, 10);


// 12. Write a function which tells letter counts of (word).
function lettercount(word)
{
    var a = word.length;
    console.log(a);
}
lettercount("word");

// 13. Write a function to set (year) in date object.
function setyear(month)
{
    var date = new Date();
    date.setFullYear(year);
    console.log(date);
}
setyear(2002);

// 14. Write a function which tells the age of a person who Born on
// (dateOfBirth)
function calculateAge(dateOfBirth) {
    var currentDate = new Date();
    var birthDate = new Date(dateOfBirth);
  
    var timeDiff = currentDate.getTime() - birthDate.getTime();
    var ageInMillis = timeDiff / (1000 * 60 * 60 * 24 * 365);
    var age = Math.floor(ageInMillis);
  
    return age;
  }
  
  var dateOfBirth = "11-24-2002";
  var age = calculateAge(dateOfBirth);
  console.log(age);

// 15. Write a function which tells the presense of (word) in an
// array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// result should be in true or false
function abc(a){
    var word = ['zaid','haris','raza','abu bakar','hassan','hussain','fatima'];
    var check = word.indexOf(a);
    console.log(check)
    if(check == -1){
        console.log(false)
    }
    else{
        console.log(true)
    }
}
abc("fatima");

// 16. Write a function which repeat (letter) 10 times.
// Hint: "abcde" str.repeat(10)
function repeatLetter(letter) {
    return letter.repeat(10);
}  
var repeatedString = repeatLetter('a');
console.log(repeatedString);

// 17. write a function which reverse array = ['a','b','c','d','e']
// Hint: arr.reverse()
function reverseArray(arr){
    return arr.reverse();
}
var myArray = ['a', 'b', 'c', 'd', 'e'];
var reversedArray = reverseArray(myArray);
console.log(reversedArray);
