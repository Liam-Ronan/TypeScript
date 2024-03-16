
//* Tuples

let tupleOne: [string, number, boolean] = ["hello", 45, true];

//* Tuples - examples

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


//* Named Tuples

let userOne: [name: string, age: number];

userOne = ["Ellie", 56];
console.log(userOne[0]);