"use strict";
//* Functions
function addNum(num, numTwo) {
    return num + numTwo;
}
console.log("addNum function:", addNum(23, 4));
const subtractNumbers = (a, b) => {
    return a - b;
};
console.log("subtract function:", subtractNumbers(5, 2));
const nameArray = [
    "Liam",
    "ellie",
    "andy",
    "paul",
    "james",
    "damien",
];
const filterArray = (names) => {
    return names.filter((name) => name.length > 4);
};
console.log("Filter array function:", filterArray(nameArray));
let arrayOne = [1, 5, 3, 2, 1];
function addAllNums(items) {
    const total = items.reduce((a, c) => a + c);
    return total;
}
console.log("reduce Method:", addAllNums(arrayOne));
const addTwoNumbers = (a, b) => {
    return a + b;
};
const multiplyNumbers = (first, second) => {
    return first * second;
};
const squareNumber = (num) => {
    return num * num;
};
//* Array of functions - must match the Calculator
let calcs = [];
calcs.push(addTwoNumbers);
calcs.push(multiplyNumbers);
//* This works because the calculator function signature does not need all arguments
calcs.push(squareNumber);
