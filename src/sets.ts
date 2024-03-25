//* Sets In TS //*
const namess = new Set<string>();

namess.add("mario");
namess.add("peach");
namess.add("luigi");
namess.add("mario");

console.log(namess);

//* Sets with custom types //*

interface User {
	email: string;
	score: number;
}

const user1: User = { email: "nnksdss@gmail.com", score: 23 };
const user2: User = { email: "gfgdgdfg@gmail.com", score: 12 };

const users = new Set<User>();

users.add(user1);
users.add(user2);
users.add(user1);

console.log(users);

//* Sets as function arguments //*

function logEmails(users: Set<User>): void {
	users.forEach((user) => {
		console.log(user.email);
		console.log(user.score);
	});
}

logEmails(users);
