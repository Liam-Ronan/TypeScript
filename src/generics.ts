//********************* */
//* Generics - Functions

import { it } from "node:test";

//***************** */
function logAndReturnString(val: string): string {
	console.log(val);
	return val;
}
function logAndReturnNumber(val: number): number {
	console.log(val);
	return val;
}
function logAndReturnBoolean(val: boolean): boolean {
	console.log(val);
	return val;
}

function logAndReturnValue<T>(val: T): T {
	console.log(val);
	return val;
}

const result = logAndReturnValue<string>("mario");
const result1 = logAndReturnValue<number>(45);

//********* */
//* Example 2
//********* */

const getRandomArrayValue = <T>(values: T[]): T => {
	const i = Math.floor(Math.random() * values.length);

	return values[i];
};

interface Characters {
	name: string;
	score: number;
}

const people: Characters[] = [
	{ name: "mario", score: 100 },
	{ name: "peach", score: 23 },
	{ name: "luigi", score: 54 },
	{ name: "wario", score: 3 },
];

const randomUser = getRandomArrayValue<Characters>(people);
console.log(randomUser);

//*************** */
//* Generic Interface
//**************** */
interface Collection<T> {
	data: T[];
	name: string;
}

const collectionOne: Collection<string> = {
	data: ["mario", "luigi", "peach"],
	name: "mario Characters",
};

const collectionTwo: Collection<number> = {
	data: [3, 5, 644, 64],
	name: "winning numbers",
};

const randomCollection = <T>(c: Collection<T>): T => {
	const i = Math.floor(Math.random() * c.data.length);
	return c.data[i];
};

const newCollection = randomCollection<string>(collectionOne);
console.log(newCollection);

//* Typescript understands this to be a number because collectionTwo - <number>
const newCollectionTwo = randomCollection(collectionTwo);
console.log(newCollectionTwo);

//*************** */
//* Generic Classes
//*************** */

interface useId {
	id: number;
}

class dataCollection<T extends useId> {
	constructor(private data: T[]) {}

	loadOne(): T {
		const i = Math.floor(Math.random() * this.data.length);
		return this.data[i];
	}

	loadAll(): T[] {
		return this.data;
	}

	add(val: T): T[] {
		this.data.push(val);
		return this.data;
	}

	//***************** */
	//* Generic Constraints
	//* Restrains or restricts the type of data that can work with it
	//***************** */

	deleteOne(id: number): void {
		this.data = this.data.filter((item) => item.id !== id);
	}
}

interface Userr {
	name: string;
	score: number;
	id: number;
}

const users = new dataCollection<Userr>([
	{ name: "Liam", score: 65, id: 1 },
	{ name: "Amy", score: 23, id: 2 },
	{ name: "Damien", score: 212, id: 3 },
]);

users.add({ name: "mario", score: 53, id: 4 });
// users.deleteOne(2)

console.log("load one - ", users.loadOne());
console.log("load all - ", users.loadAll());
// console.log('highest score - ', users.highestScore())
