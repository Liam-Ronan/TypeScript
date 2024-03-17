//* Union types //

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