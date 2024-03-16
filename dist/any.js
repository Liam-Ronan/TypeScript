"use strict";
//* any type
let age;
let title;
age = false;
title = 25;
title = {
    hello: "world",
};
//* any type - Arrays
let anything = ["hello", true, 30, null];
anything.push({ id: 123 });
console.log("Any type arrays:", anything);
//* any - functions
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether(7);
console.log("Any type functions", resultOne);
