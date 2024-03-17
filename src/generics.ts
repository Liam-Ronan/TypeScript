//* Generics

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

// Example 2

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
