

//*************** */
/*
 * Object Literals *
 */
//**************** */
let user: {
	firstName: string;
	age: number;
	id: number;
} = {
	firstName: "mario",
	age: 23,
	id: 4,
};

let car: {
	model: string;
	cost: number;
	color: string;
} = {
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
function greeting(greeting: string, name: string) {
	return `${greeting}, ${name}`;
}

const result = greeting("Good Morning!", "Mario");
console.log("type inference:", result);


//************** */
//* Type Aliases
//************** */

//* Example 1 - Tuple
type rgb = [number, number, number];

function getRandomColour(): rgb {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	return [r, g, b];
}

const colour = getRandomColour();
const colourTwo = getRandomColour();
console.log(`RGB Colours: ${colour}, ${colourTwo}`);

//* Example 2 - object literal
type User = {
	name: string;
	score: number;
};

const userThree: User = { name: "mario", score: 23 };

function formatUser(user: User): void {
	console.log(`${user.name} has a score of ${user.score}`);
}

formatUser(userThree);
formatUser({ name: "yoshi", score: 100 });

//************ */
//* Union types //
//************* */
let someId: number | string;
someId = 2;
someId = "2";

let email: string | null = null;
email = "liam8393@gmail.com";
email = null;

type Id = number | string;
let anotherId: Id;

anotherId = "dfsfdsdf";
anotherId = 6;

function swapIdType(id: Id): Id {
	//* Can only use props and methods common to both
	//* Numbers and string types
	//* parseInt() not allowed
	//* parseInt(id)

	return id;
}

swapIdType("5");

//************ */
//*Type Guards //
//************** */

type IdOne = number | string;

function swapId(id: IdOne) {
	if (typeof id === "string") {
		return parseInt(id);
	} else {
		return id.toString();
	}
}

const idOne = swapId(1);
const idTwo = swapId("2");


//************* */
//* Extending type aliases
//************* */

type Human = {
	id: string | number;
	firstName: string;
};

type Tiger = Human & {
	email: string;
};

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

function printHuman(tiger: Tiger) {
	console.log(tiger.id, tiger.email);
}

printHuman(humanTwo)
