console.log("hello bros!!!!");

////////////
/* Arrays */
////////////
let names: string[] = ["Mario", "Peach", "luigi", "bowser"]
let ages: number[] = [65, 12, 23, 76, 54]

names.push("hello")
ages.push(21)

let fruits = ["apples", "pears", "mangos", "bananas"]
fruits.push("peaches")

const f = fruits[3]
let things = [1, true, "hello"]
const t = things[0] 

////////////
/* Object Literals */
////////////
let user: {
    firstName: string,
    age: number,
    id: number
} = {
    firstName: "mario",
    age: 23,
    id: 4,
}

user.firstName = "liam"
user.id = 5


////////////
/* Type interface - object literals */
////////////

let person = {
    name: "luigi",
    score: 34
}

person.name = "ellie"
person.score = 43

const score = person.score