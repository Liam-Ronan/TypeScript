//* Interfaces

interface Author {
	name: string;
	avatar: string;
}

const authorOne: Author = {
	name: "Bowser",
	avatar: "/img/bowser.png",
};

interface Post {
	title: string;
	body: string;
	tags: string[];
	create_at: Date;
	author: Author;
}

const newPost: Post = {
	title: "first post",
	body: "something here",
	tags: ["ddj", "dfdskl", "dlksfk"],
	create_at: new Date(),
	author: authorOne,
};

//* Interface as function argument types

function createPost(post: Post): void {
	console.log(`Created post ${post.title} by ${post.author.name}`);
}

createPost(newPost);

//* Interfaces - arrays

let posts: Post[] = [];
posts.push(newPost);

//* Tagged Interfaces //
interface userOne {
	type: "user";
	username: string;
	email: string;
	id: Id;
}

interface Person {
	type: "person";
	firstName: string;
	age: number;
	id: Id;
}

function logDetails(value: userOne | Person): void {
	if (value.type === "user") {
		console.log(value.email, value.username);
	}
	if (value.type === "person") {
		console.log(value.firstName, value.age);
	}
}

//*Reusable Interfaces **/
interface hasQnty {
	quantity: number;
}

const something: hasQnty = {
	quantity: 50,
};

function printQuantity(item: hasQnty): void {
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


//* Function signatures - interfaces **/

interface HasArea {
	name: string;
	calcArea: (a: number) => number;
}

const shapeOne: HasArea = {
	name: "square",
	calcArea(len: number) {
		return len * len;
	},
};

const shapeTwo: HasArea = {
	name: "circle",
	calcArea(r: number) {
		return (Math.PI * r) ^ 2;
	},
};

shapeOne.calcArea(5);
console.log(shapeTwo.calcArea(54));


//* Extending interfaces **/

interface hasFormatter {
	format(): string;
}

interface Bill extends hasFormatter {
	id: string | number;
	amount: number;
	server: string;
}

const personOne = {
	id: 1,
	format(): string {
		return `This user has an id of ${this.id}`;
	},
};

const billOne = {
	id: 2,
	amount: 50,
	server: "mario",
	format(): string {
		return `Bill with an id ${this.id} has £${this.amount} to pay`;
	},
};

function printFormatted(val: hasFormatter): void {
	console.log(val.format());
}

function printBill(bill: Bill): void {
	console.log("server:", bill.server);
	console.log(bill.format());
}

printFormatted(personOne);
printFormatted(billOne);
printBill(billOne);
