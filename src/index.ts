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

console.log(user.firstName = "liam")
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
console.log(score)


/////////////
/* Functions */
/////////////
function addNum(num: number, numTwo: number): number {
    return num + numTwo
}

const subtractNumbers = (a:number, b:number): number => {
    return a - b
}
console.log(addNum(23, 4))
console.log(subtractNumbers(5, 2))


let arrayOne: number[] = [1, 5, 3, 2, 1];

function addAllNums(items: number[]): void{
    const total = items.reduce((a, c) => a + c)
    console.log(total)
}

addAllNums(arrayOne)

///////////////
/* Return type interference */
///////////////
function greeting(name: string, greeting: string) {
    return `${greeting}, ${name}`
}

const result = greeting("Mario", "Good Morning!")
console.log(result)

/////////
/* Any type */
////////

let age: any
let title

age = false;

title = 25
title = {
    hello: "world"
}

/////////
/* Any type - Arrays */
/////////

let anything: any[] = ["hello", true, 30, null]
anything.push({id: 123})
console.log(anything)

////////////////////
/* Functions - any */
////////////////////

function addTogether(value: any): any {
    return value + value
}

const resultOne = addTogether("hello")
console.log(resultOne)