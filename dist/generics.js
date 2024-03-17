"use strict";
//********************* */
//* Generics - Functions
Object.defineProperty(exports, "__esModule", { value: true });
//***************** */
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
//********* */
//* Example 2
//******** */
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
const collectionOne = {
    data: ["mario", "luigi", "peach"],
    name: "mario Characters",
};
const collectionTwo = {
    data: [3, 5, 644, 64],
    name: "winning numbers",
};
const randomCollection = (c) => {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
};
const newCollection = randomCollection(collectionOne);
console.log(newCollection);
//* Typescript understands this to be a number because collectionTwo - <number>
const newCollectionTwo = randomCollection(collectionTwo);
console.log(newCollectionTwo);
class dataCollection {
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(val) {
        this.data.push(val);
        return this.data;
    }
    //***************** */
    //* Generic Constraints
    //* Restrains or restricts the type of data that can work with it
    //***************** */
    deleteOne(id) {
        this.data = this.data.filter((item) => item.id !== id);
    }
}
const users = new dataCollection([
    { name: 'Liam', score: 65, id: 1 },
    { name: 'Amy', score: 23, id: 2 },
    { name: 'Damien', score: 212, id: 3 }
]);
users.add({ name: 'mario', score: 53, id: 4 });
// users.deleteOne(2)
console.log('load one - ', users.loadOne());
console.log('load all - ', users.loadAll());
// console.log('highest score - ', users.highestScore())
