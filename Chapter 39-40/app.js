// Chapter 39, 40 (Switch Statements)
// 1. Write a JavaScript switch statement that checks the value of a
// variable and performs different actions based on different cases.

var fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("It's an apple.");
    break;
  case "banana":
    console.log("It's a banana.");
    break;
  case "orange":
    console.log("It's an orange.");
    break;
  default:
    console.log("Unknown fruit.");
}
// 2. Write a JavaScript switch statement that check whether cityName
// given by user check the cityName if match alert the user and
// break the statement, if not default message will be shown to user.

var cityName = prompt("Enter a city name:");

switch (cityName.toLowerCase()) {
  case "karachi":
    alert("You entered Karachi!");
    break;
  case "lahore":
    alert("You entered Lahore!");
    break;
  case "islamabad":
    alert("You entered Islamabad!");
    break;
  default:
    alert("City not recognized.");
}
