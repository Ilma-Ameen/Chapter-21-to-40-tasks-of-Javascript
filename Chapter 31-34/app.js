// Chapter 31 - 34 (Date & Time)
// 1. Code a statement that creates a new Date object and assigns it to
// dObj, which hasn't been declared beforehand.
var dObj = new Date();

// 2. Code a statement that creates a new Date object, converts it to a
// string, and assigns the string to dStr, which hasn't been declared
// beforehand.
var Objnew = new Date();
var dstr = Objnew.toString(); 

// 3. Code a statement that extracts the day of the week from a Date
// object represented by d and assigns it to day, which hasn't been
// declared beforehand.
var d = new Date();
var days=['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];
cossole.log("day of the week---->",days[date.getDay()]);

// 4. The day has been extracted from the Date object and assigned to
// d. The names of the days of the week have been assigned to the
// array dayNames. Alert the current day with array index.
var d = new Date();
var dayNames=['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];
cossole.log("day of the week---->",dayNames[date.getDay()]);

// 5. Extract all parts of the Date and Time and assign it to the variable
// which has not been declared beforehand.
var date = new Date();
var days =['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];
console.log("Date ===>",date.getDate());
console.log("Day ===>",days[date.getDay()]);
console.log("Month ===>",date.getMonth());
console.log("Year ===>",date.getFullYear());
console.log("Hours ===>",date.getHours());
console.log("Min ===>",date.getMinutes());
console.log("Sec ===>",date.getSeconds());
console.log("Millisec ===>",date.getMillisecconds());
console.log("Time ===>",date.getTime());

// 6. Code a statement that creates a Date object for the last day of the
// last month of 2020 and assigns it to later, which hasn't been
// declared beforehand.
var later = new Date(2020, 11, 31);
console.log(later);

// 7. Create a Date object for the second day of the second month of
// 1992 and assign it to a variable that hasn't been declared
// beforehand.
var date1992 = new Date(1992, 1, 2);
console.log(date1992);

// 8. Code a single statement that displays in an alert the milliseconds
// that elapsed between the reference date and the beginning of
// 1980.
var referenceDate = new Date();
var beginningOf1980 = new Date(1980, 0, 1);
var millisecondsElapsed = referenceDate.getTime() - beginningOf1980.getTime();
alert(millisecondsElapsed);

// 9. How do you change the year of a date in JavaScript?
var date = new Date();
var change = date.setFullYear(year);

// 10. Write a JavaScript function to change the month of a given
// date to January.
var date = new Date();
var change = date.setMonth(0);

// 11. What is the method to change the day of the week for a
// specific date in JavaScript?
//there is no specific method

// 12. Write a JavaScript function to change the minutes of a given
// time to a specific value. (Value by prompt)
var newMinutes = prompt("Enter the new minutes:");
date.setMinutes(newMinutes);

// 13. Write a JavaScript function to add a specific number of
// hours to a given time.
var originalDate = new Date();
var hoursToAdd = 3;
var newDate = addHoursToDate(originalDate, hoursToAdd);
console.log(newDate);

// 14. You have to create a age calculator in JavaScript

var date = new Date();
var dateOfBirth = new Date("11-24-2002")

console.log("Time--->",date.getTime());
console.log("DOB--->",dateofBirth.getTime());

var a = date.getTime()-dateOfBirth.getTime();
a= a/(1000*60*60*24*365);
console.log(Math.floor(a));