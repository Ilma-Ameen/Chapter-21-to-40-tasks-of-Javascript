// Chapter 38 (Local vs. Global
// Variables)
// 1. Write a JavaScript function that demonstrates the usage of a local
// variable.
function greet() {
    var message = "Hello,";
    console.log(message + " World!");
}
greet();
// 2. How can you access a global variable inside a function in
// JavaScript?
var globalVariable = "I am global";

function printGlobal() {
  console.log(globalVariable);
}

printGlobal();

