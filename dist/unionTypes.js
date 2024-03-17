"use strict";
//* Union types //
let someId;
someId = 2;
someId = "2";
let email = null;
email = "liam8393@gmail.com";
email = null;
let anotherId;
anotherId = "dfsfdsdf";
anotherId = 6;
function swapIdType(id) {
    //* Can only use props and methods common to both
    //* Numbers and string types
    //* parseInt() not allowed
    //* parseInt(id)
    return id;
}
swapIdType("5");
