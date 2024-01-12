console.log("hello bros!!!!");

////////////
/* Arrays */
////////////
let names: string[] = ["Mario", "Peach", "luigi", "bowser"];
let ages: number[] = [65, 12, 23, 76, 54];

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
let user: {
	firstName: string;
	age: number;
	id: number;
} = {
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
function addNum(num: number, numTwo: number): number {
	return num + numTwo;
}

const subtractNumbers = (a: number, b: number): number => {
	return a - b;
};
console.log(addNum(23, 4));
console.log(subtractNumbers(5, 2));

let arrayOne: number[] = [1, 5, 3, 2, 1];

function addAllNums(items: number[]): void {
	const total = items.reduce((a, c) => a + c);
	console.log(total);
}

addAllNums(arrayOne);

///////////////
/* Return type interference */
///////////////
function greeting(name: string, greeting: string) {
	return `${greeting}, ${name}`;
}

const result = greeting("Mario", "Good Morning!");
console.log(result);

/////////
/* Any type */
////////

let age: any;
let title;

age = false;

title = 25;
title = {
	hello: "world",
};

/////////
/* Any type - Arrays */
/////////

let anything: any[] = ["hello", true, 30, null];
anything.push({ id: 123 });
console.log(anything);

////////////////////
/* Functions - any */
////////////////////

function addTogether(value: any): any {
	return value + value;
}

const resultOne = addTogether("hello");

///////////////
/* Tuples */
//////////////

let tupleOne: [string, number, boolean] = ["hello", 45, true];

///////////////
/* Tuples examples */
///////////////

let hsla: [number, string, string, number];
hsla = [200, "100%", "50%", 1];

let xy: [number, number];
xy = [54.23, 65.76];

function useCoords(): [number, number] {
	const lat = 100;
	const lng = 50;

	return [lat, lng];
}

const [lat, lng] = useCoords();

///////////////
/* Named tuples */
//////////////

let userOne: [name: string, age: number];

userOne = ["Ellie", 56];
console.log(userOne[0]);

////////////
/* Interfaces */
///////////

interface Author {
	name: string,
	avatar: string
}

const authorOne: Author = {name: "luigi", avatar: "/img/luigi.png"}

interface Post {
	title: string,
	body: string,
	tags: string[],
	create_at: Date,
	author: Author
}

const newPost: Post = {
	title: "hello",
	body: "something interesting",
	tags: ['gaming', 'tech'],
	create_at: new Date(),
	author: authorOne
}

///////////
/* Interface as argument types */
///////////

function createPost(post: Post): void {
	console.log(`created post ${post.title} By ${post.author.name}`)
}

createPost(newPost)


//////////////////
/* Interfaces - Arrays */
//////////////////
let posts: Post[] = []

posts.push(newPost)
console.log(posts)


//////////////////
/* Type aliases */
//////////////////

//Example 1 - Tuple
type rgb = [number, number, number]

function getRandomColour(): rgb {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	return [r,g,b]
}

const colour = getRandomColour()
const colourTwo = getRandomColour()
console.log(colour, colourTwo)

//Example 2 - object literal
type User = {
	name: string
	score: number
}

const userThree: User = {name: "mario", score: 23}

function formatUser(user: User): void {
	console.log(`${user.name} has a score of ${user.score}`)
}

formatUser(userThree)
formatUser({ name: 'yoshi', score: 100 })


/////////////
/* Union Types */
/////////////
let someId: number | string
someId = 2

let email: string | null = null
email = "liam@gmail.com"
email = null

type Id = number | string
let anotherId: Id

anotherId = "dfsfdsdf"
anotherId = 6

function swapIdType(id: Id): Id {
	//Can only use props and methods common to both
	//Numbers and string types
	//parseInt() not allowed
	parseInt(id)

	return id
}

swapIdType('5')


//////////////
/* Type guards */
///////////////

type IdOne = number | string

function swapId(id: IdOne) {
	if(typeof id === 'string') {
		return parseInt(id)
	}
	else {
		return id.toString()
	}
}

const idOne = swapId(1)
const idTwo = swapId('2')

console.log(idOne, idTwo)


/////////////////
/* Tagged interfaces */
////////////////
interface userOne {
	type: 'user'
	username: string
	email: string
	id: Id
}

interface Person {
	type: 'person'
	firstName: string
	age: number
	id: Id
}

function logDetails(value: userOne | Person): void {
	if(value.type === 'user') {
		console.log(value.email, value.username)
	}
}