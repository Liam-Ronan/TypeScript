"use strict";
//* Tuples
let tupleOne = ["hello", 45, true];
//* Tuples - examples
let hsla;
hsla = [200, "100%", "50%", 1];
let xy;
xy = [54.23, 65.76];
function useCoords() {
    const lat = 100;
    const lng = 50;
    return [lat, lng];
}
const [lat, lng] = useCoords();
//* Named Tuples
let userOne;
userOne = ["Ellie", 56];
console.log(userOne[0]);
