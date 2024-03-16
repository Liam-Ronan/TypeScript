
//* any type

let age: any;
let title;

age = false;

title = 25;
title = {
	hello: "world",
};

//* any type - Arrays

let anything: any[] = ["hello", true, 30, null];
anything.push({ id: 123 });
console.log("Any type arrays:", anything);

//* any - functions


function addTogether(value: any): any {
	return value + value;
}

const resultOne = addTogether(7);
console.log("Any type functions", resultOne);