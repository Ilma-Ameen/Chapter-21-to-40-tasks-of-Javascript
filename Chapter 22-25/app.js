// Chapter 22 - 25 (Strings)
// 1. "captain" has been assigned to variable “sameWords”. You want
// to slice "ap" out of it.
var sameWords = "captain";
sameWords = sameWords.slice(1,3);
console.log(sameWords);

// 2. The number of characters in the string will be assigned to the
// variable.
var str = "Ilma";
var numofchar = str.length;

// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.
var animal = "elephant";
seg = animal.slice(2,6);
console.log(seg);

// 4. Find the number of characters in the string represented by a
// variable and assign the number to a second variable.
var str = "Ilma";
var numChars = str.length;

// 5. In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.
var str = "example";
var numChars = str.length;
var newStr = str.slice(1, numChars - 3);

// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx);
// What is the value of indx?
//answer is : 3

// 7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// var indx = text.lastIndexOf("be");
// What is the value of indx?
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx);
//answer : 16
// Note: Try the above both examples by yourself.

// 8. Find the index of the first character of the last instance of "go" in
// the string represented by the variable text and assign the number
// to the variable indx, which hasn't been declared beforehand.
var text = "Let it go, let it go!";
var indx = text.lastIndexOf("go") + 1;

// 9. Code the first line of an if statement that tests whether a segment
// with an index represented by indexNum exists in a string.
if (str[indexNum] !== undefined) {

}
// 10. In this string "abcde", what character is at index 2? (Use
// charAt)
var str = "abcde";
var character = str.charAt(2);

// 11. Find the 10th character in the string represented by text and
// assign it to the variable cha, which hasn't been declared
// beforehand.
var text = "Hello, world!";
var cha = text.charAt(9);

// 12. Find the last character in the string represented by str and
// assign it to x, which hasn't been declared beforehand.
var str = "example";
var x = str.charAt(str.length - 1);

// 13. Find the the 5th character in a string represented by input
// and assign it to cha, which hasn't been declared beforehand.
var input = "abcdef";
var cha = input.charAt(4);

// 14. Code the first line of an if statement that tests whether the
// 3rd character of a string represented by a variable is a particular
// character.
if (str.charAt(2) === 'X') {
}

// 15. Code a for loop that cycles through all the characters of a
// string represented by a variable and assigns each character to an
// element of an array that has been declared beforehand.
// In the string represented by reply replace the first instance of "no"
// with "yes" and assign the revised string to revisedReply, which hasn't
// been declared beforehand.
var charArray = [];
  for (var i = 0; i < str.length; i++) {
    charArray.push(str.charAt(i));
}

// 16. In a string represented by str replace the first instance of "1"
// with "one" and assign the revised string to newStr, which hasn't
// been declared beforehand.
var newStr = str.replace("1", "one");

// 17. If you want all instances replaced, enter 3 characters that
// need to appear in this statement.
// var y = x.replace("a", "z");
var y = x.replace(/abc/g, "xyz");