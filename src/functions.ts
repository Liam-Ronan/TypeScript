
//* Functions

function addNum(num: number, numTwo: number): number {
	return num + numTwo;
}
console.log("addNum function:", addNum(23, 4));



const subtractNumbers = (a: number, b: number): number => {
	return a - b;
};
console.log("subtract function:", subtractNumbers(5, 2));


const nameArray: string[] = [
	"Liam",
	"ellie",
	"andy",
	"paul",
	"james",
	"damien",
];

const filterArray = (names: string[]): string[] => {
	return names.filter((name: string) => name.length > 4);
};
console.log("Filter array function:", filterArray(nameArray));



let arrayOne: number[] = [1, 5, 3, 2, 1];

function addAllNums(items: number[]): number {
	const total: number = items.reduce((a, c) => a + c);
	return total;
}
console.log("reduce Method:", addAllNums(arrayOne));


//* Function signatures
type Calculator = (numOne: number, numTwo: number) => number;

const addTwoNumbers = (a: number, b: number): number => {
	return a + b;
};

const multiplyNumbers = (first: number, second: number): number => {
	return first * second;
};

const squareNumber = (num: number) => {
	return num * num;
};

//* Array of functions - must match the Calculator
let calcs: Calculator[] = [];

calcs.push(addTwoNumbers);
calcs.push(multiplyNumbers);
//* This works because the calculator function signature does not need all arguments
calcs.push(squareNumber);