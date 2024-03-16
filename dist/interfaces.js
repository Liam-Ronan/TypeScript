"use strict";
//* Interfaces
const authorOne = {
    name: "Bowser",
    avatar: "/img/bowser.png",
};
const newPost = {
    title: "first post",
    body: "something here",
    tags: ["ddj", "dfdskl", "dlksfk"],
    create_at: new Date(),
    author: authorOne,
};
//* Interface as function argument types
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
//* Interfaces - arrays
let posts = [];
posts.push(newPost);
function logDetails(value) {
    if (value.type === "user") {
        console.log(value.email, value.username);
    }
    if (value.type === "person") {
        console.log(value.firstName, value.age);
    }
}
const something = {
    quantity: 50,
};
function printQuantity(item) {
    console.log(`The qty of the item is ${item.quantity}`);
}
const fruit = {
    name: "mango",
    quantity: 43,
};
const vehicle = {
    type: "car",
    quantity: 76,
};
printQuantity(fruit);
const shapeOne = {
    name: "square",
    calcArea(len) {
        return len * len;
    },
};
const shapeTwo = {
    name: "circle",
    calcArea(r) {
        return (Math.PI * r) ^ 2;
    },
};
shapeOne.calcArea(5);
console.log(shapeTwo.calcArea(54));
const personOne = {
    id: 1,
    format() {
        return `This user has an id of ${this.id}`;
    },
};
const billOne = {
    id: 2,
    amount: 50,
    server: "mario",
    format() {
        return `Bill with an id ${this.id} has £${this.amount} to pay`;
    },
};
function printFormatted(val) {
    console.log(val.format());
}
function printBill(bill) {
    console.log("server:", bill.server);
    console.log(bill.format());
}
printFormatted(personOne);
printFormatted(billOne);
printBill(billOne);
