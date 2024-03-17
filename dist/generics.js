"use strict";
//* Generics
function logAndReturnString(val) {
    console.log(val);
    return val;
}
function logAndReturnNumber(val) {
    console.log(val);
    return val;
}
function logAndReturnBoolean(val) {
    console.log(val);
    return val;
}
function logAndReturnValue(val) {
    console.log(val);
    return val;
}
const result = logAndReturnValue("mario");
const result1 = logAndReturnValue(45);
// Example 2
const getRandomArrayValue = (values) => {
    const i = Math.floor(Math.random() * values.length);
    return values[i];
};
const people = [
    { name: "mario", score: 100 },
    { name: "peach", score: 23 },
    { name: "luigi", score: 54 },
    { name: "wario", score: 3 },
];
const randomUser = getRandomArrayValue(people);
console.log(randomUser);
