//Primitive and non-primitive data types

//primitive datatypes => call by value
//string
//number
//boolean
//null
//undefined

//non primitive/ reference datatypes => call by reference
//array
//object
//function

// let name = "ram";
// name = "n9solution";
// console.log(typeof name);

// let marks = 42;
// console.log(typeof marks);

// let isAdmin = true;
// console.log(typeof isAdmin);

// let list = null;
// console.log(typeof list);

// let info;
// console.log(typeof info);

//array, object, function

// let list = [1, 2, 3, 4, false, null, "ram"];
// console.log(typeof list);

// let list = {
//   name: "ram ",
//   marks: 42,
// };
// console.log(typeof list);

// function name() {}
// console.log(typeof name);

// let name = [1, 2];
// console.log(typeof name);

//In

let ar1 = [1, 2, 1, 3, 1, 4];
let arr = ["ram", "ram", "anish", "manish", "ram"];
// console.log(ar1);
let ar2 = [...new Set(arr)];
console.log(ar2);
