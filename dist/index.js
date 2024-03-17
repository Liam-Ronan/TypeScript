"use strict";
//*************** */
/*
 * Object Literals *
 */
//**************** */
let user = {
    firstName: "mario",
    age: 23,
    id: 4,
};
let car = {
    model: "audi",
    cost: 13221,
    color: "red",
};
//***************************** */
// * Type interface - object literals //
//***************************** */
let person = {
    name: "luigi",
    score: 34,
};
//********************** */
//* Return type inference
//********************** */
function greeting(greeting, name) {
    return `${greeting}, ${name}`;
}
const result0 = greeting("Good Morning!", "Mario");
console.log("type inference:", result);
function getRandomColour() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colour = getRandomColour();
const colourTwo = getRandomColour();
console.log(`RGB Colours: ${colour}, ${colourTwo}`);
const userThree = { name: "mario", score: 23 };
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}`);
}
formatUser(userThree);
formatUser({ name: "yoshi", score: 100 });
function swapId(id) {
    if (typeof id === "string") {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idOne = swapId(1);
const idTwo = swapId("2");
const humanOne = {
    id: 1,
    firstName: "mario",
};
const humanTwo = {
    id: "2",
    firstName: "yoshi",
    email: "yoshi@netninja.com",
};
const humanThree = {
    email: "peach&netninja.dev",
};
function printHuman(tiger) {
    console.log(tiger.id, tiger.email, tiger.firstName);
}
printHuman(humanTwo);
