// {
//   //parent
//   let name = "ram ";
//   {
//     // child
//     // let age = 20;
//     console.log(name);
//   }
// }
// console.log(name);
// console.log(age);
//scope chaining => {{{}}}
// if (true) {
//   // parent block
//   let a = 1;
//   if (true) {
//     // child block
//     let a = 5;
//     if (true) {
//       // grand child block
//       let a = 6;
//       console.log(a);
//     }
//   }
// }

//lexical scope
//Lexical scope is a scope of a parent.[only parent]

// if (true) {
//   // parent block
//   let a = 1;
//   if (true) {
//     // child block
//     let a = 5;
//     if (true) {
//       // grand child block
//       let a = 6;
//       console.log(a);
//     }
//   }
// }

//setTimeout

// setTimeout(fun,dealytime)

// console.log("a");
// setTimeout(() => {
//   console.log("this is settimeout");
// }, 1000);
// console.log("b");
//setTimeout fucntion will executes at last.

//Error handling

// let age = 17;
// try {
//   if (age > "ram") {
//     console.log("you can drive");
//   }
// } catch (error) {
//   let val = new Error("this is error");
//   console.log(val);
// }

// let error = new Error("this is first error");
// throw error;

//callback function
//A callback function is a function passed into another fucntion as an argument.
// let fun1 = () => {};
// let fun3 = () => {};
// let fun2 = () => {};

// fun2(fun1);

//Higher Order Function
//A function which takes agrument as function
//A funtion which return another function is called higher order function

//JSON.stringify() => Converts a javascript value to a Javascript Object Notation (JSON) string.

// let info = {
//   name: "ram",
//   age: 29,
//   location: "ktm",
// };

// let info1 = JSON.stringify(info);
// console.log(info1);
// '{"name":"ram","age":29,"location":"ktm"}';

//JSON.parse() => Converts a Javascipt  Object Notation(JSON) string into an object.

// let info1 = JSON.parse(info);
// console.log(info1);
