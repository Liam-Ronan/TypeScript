"use strict";
console.log("hello bros!!!!");
////////////
/* Arrays */
////////////
let names = ["Mario", "Peach", "luigi", "bowser"];
let ages = [65, 12, 23, 76, 54];
names.push("hello");
ages.push(21);
let fruits = ["apples", "pears", "mangos", "bananas"];
fruits.push("peaches");
const f = fruits[3];
let things = [1, true, "hello"];
const t = things[0];
////////////
/* Object Literals */
////////////
let user = {
    firstName: "mario",
    age: 23,
    id: 4,
};
console.log((user.firstName = "liam"));
user.id = 5;
////////////
/* Type interface - object literals */
////////////
let person = {
    name: "luigi",
    score: 34,
};
person.name = "ellie";
person.score = 43;
const score = person.score;
console.log(score);
/////////////
/* Functions */
/////////////
function addNum(num, numTwo) {
    return num + numTwo;
}
const subtractNumbers = (a, b) => {
    return a - b;
};
console.log(addNum(23, 4));
console.log(subtractNumbers(5, 2));
let arrayOne = [1, 5, 3, 2, 1];
function addAllNums(items) {
    const total = items.reduce((a, c) => a + c);
    console.log(total);
}
addAllNums(arrayOne);
///////////////
/* Return type interference */
///////////////
function greeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = greeting("Mario", "Good Morning!");
console.log(result);
/////////
/* Any type */
////////
let age;
let title;
age = false;
title = 25;
title = {
    hello: "world",
};
/////////
/* Any type - Arrays */
/////////
let anything = ["hello", true, 30, null];
anything.push({ id: 123 });
console.log(anything);
////////////////////
/* Functions - any */
////////////////////
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether("hello");
///////////////
/* Tuples */
//////////////
let tupleOne = ["hello", 45, true];
///////////////
/* Tuples examples */
///////////////
let hsla;
hsla = [200, "100%", "50%", 1];
let xy;
xy = [54.23, 65.76];
function useCoords() {
    const lat = 100;
    const lng = 50;
    return [lat, lng];
}
const [lat, lng] = useCoords();
///////////////
/* Named tuples */
//////////////
let userOne;
userOne = ["Ellie", 56];
console.log(userOne[0]);
const authorOne = { name: "luigi", avatar: "/img/luigi.png" };
const newPost = {
    title: "hello",
    body: "something interesting",
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne
};
///////////
/* Interface as argument types */
///////////
function createPost(post) {
    console.log(`created post ${post.title} By ${post.author.name}`);
}
createPost(newPost);
//////////////////
/* Interfaces - Arrays */
//////////////////
let posts = [];
posts.push(newPost);
console.log(posts);
function getRandomColour() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colour = getRandomColour();
const colourTwo = getRandomColour();
console.log(colour, colourTwo);
const userThree = { name: "mario", score: 23 };
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}`);
}
formatUser(userThree);
formatUser({ name: 'yoshi', score: 100 });
/////////////
/* Union Types */
/////////////
let someId;
someId = 2;
let email = null;
email = "liam@gmail.com";
email = null;
let anotherId;
anotherId = "dfsfdsdf";
anotherId = 6;
function swapIdType(id) {
    //Can only use props and methods common to both
    //Numbers and string types
    //parseInt() not allowed
    parseInt(id);
    return id;
}
swapIdType('5');
function swapId(id) {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idOne = swapId(1);
const idTwo = swapId('2');
console.log(idOne, idTwo);
function logDetails(value) {
}
