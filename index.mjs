// datatypes
// Number =>1,2,3,4
// string=> "n9solution", 'anish', `anish`
// boolean  => true , false
// operator => +, -, *, /

// console.log("Hello");
// console.log("this is n9 solution");
// console.log("office");
// console.log("chabahil");

// console.log(1 + 1);
// console.log(2 * 2);

// console.log("a" + "b");
// console.log(1 + "a");

// Javascript is a asynchronous and single threaded language.
// If two numbers are added it produces a output of sum in number and if two strings are added it concatenation and produces output as a string

// console.log("anish");
// console.log("anish");
// console.log(`anish`);

/* console.log(1)
console.log(object)
console.log(object) */

// variable
// var,let,const

// let name = "anish";
// console.log(name);
// let address = "ktm";
// let age = 50;
// age = 30;
// console.log(age);

// let num1 = 1;
// let num2 = 2;

// console.log("a" - "a");
// console.log(`sum of ${num1}`);

// console.log(1);
// console.log(2);

// console.log("this is javascript");

// let a = !!" ";
// console.log(a);

// let name = "anish", 'anish', `anish`

// let a = "ani'sh";
// console.log(a);

//we cannot use double quotes inside double quotes and we also cannot use single quotes inside single quotes

// console.log(1 + 2 + 3 + "4");
// 1+2
// 3+3
// 6+"4"
// "64"

//If we add a number and string, the interpreter converts the number into a string and concatenates both together.

//we cannot declare variable name twice => it throws error
// let name = "anish";
// let address = "ktm";
// // let school = "n9";
// // let address = "bhakapur";
// console.log(name);

// console.log(1 + 2 + 3 + "4");
// "1"+2 = "12"
// "12"+ 3 =

//we cannot call variable if it is not defined.

// String Literals => ``

// let num1 = 1;
// let num2 = 2;

// let message = `${num1}`;
// let sum = `The sum of ${num1} and ${num2} is ${num1 + num2}`;
// // console.log(message);
// console.log(sum);

// let name = "anish";
// let surname = "adhikari";
// let fullName = `My fullname is ${name} ${surname}`;
// console.log(fullName);

//truthy or falsy value
//boolean true or fasle
// ! = not
//single string is falsy value other are truthy value
//0 is also a falsy value others true
// let a = !!"false";
// console.log(a);

// ===, > , < , >=, <=

// console.log(1 === 2);
// console.log(1 <= 1);

//If else

// let a = true;
// if (1 !== 1) {
//   console.log("i am if ");
// } else {
//   console.log("i am else");
// }
// In if else statement condition block is always wrapped by parenthesis

// () => parenthesis
// {} => curly braces or block
// [] => array

// let name = "hari";

// if (name === "hari") {
//   console.log("i am a");
// } else if (name === "ram") {
//   console.log(" i am b");
// } else if (name === "roshan") {
//   console.log("i am c");
// } else {
//   console.log("i am other");
// }

// let name = 10;

// if (name > 11) {
//   console.log("i am a");
// } else if (name >= 10) {
//   console.log("i am b");
// } else {
//   console.log("i am c");
// }

// if the value is true single not (!) makes it false
// double not (!!) converts the value into boolean

// let name = "anish";
// if (!name) {
//   console.log("a");
// } else {
//   console.log("b");
// }

//Function
//define function
//call function
//pass value to function
// return
// arrow function => always use arrow funtion

//A function will not execute unless it is not called. we have to call function to execute the function code block.
// let home = function () {
//   console.log("i am function");
// };

// console.log("a");
// home();
// console.log("b");

// let fun1 = function (a, b, c) {
//   //parameter
//   //   console.log("i am function");
//   //   console.log(a);
//   //   console.log(b);
//   //   console.log(c);
//   console.log(a + b);
//   console.log(a + b + c);
// };

// fun1(1, 2, 3); //arguments

// let multiply = function (a, b, c) {
//   let d = a * b * c;
//   console.log(d);
// };
// multiply(3, 6,);

//default value

// let fun1 = function (a, b, c = 9) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// };
// fun1(1, 2, 3);
// It is not necessary to have same number of arguments and parameters.

//funtion with return
// let fun1 = function () {
//   return 3;
//   console.log("a"); // unreachable code
// };
// let data = fun1();
// console.log(data);

//Funtion without return: call normally fun1()
//Function with return : let data = fun1(), call by storing it in a variable.

// let fun1 = function () {};
// let fun1 =()=>{}
// ()=>{}

// let age = 18;
// let fun1 = () => {
//   if (age > 17) {
//     console.log("He can go to club");
//   } else {
//     console.log("He is not young");
//   }
// };

// let data = fun1();

// let add = (num1, num2) => {
//   //   let num3 = num1 * num2;
//   //   return num3;
//   return num1 + num2; //better approach
// };
// //Javascript function can return only one value.
// let sum = add(8, 9);
// console.log(sum);

// let name = "anish";
// console.log(name);
// name = "rijan";
// console.log(name);

//Javascript is a dynamic language because a variable can be stored different value at a different time.

// const name = "ram";
// console.log(name);
// name = "hari";
// console.log(name);

//export & import

//Date

// console.log(new Date());
// //It gives the current date and time. new Date() gives date in iso format: yyyy-mm-ddThh:mm:ss
// console.log(new Date().toDateString());
// console.log(new Date().toLocaleString());
// console.log(new Date().toLocaleTimeString());
// console.log(new Date().toLocaleDateString());

//length

// let name = "anish adhikari";
// console.log(name.length);

// toLowerCase

// let name = "AnISh";
// console.log(name.toLowerCase());

//replaceAll

// let name = "Tree";
// console.log(name.replaceAll("T", "M"));

//Uppercase

// let name = "Mango";
// console.log(name.toUpperCase());

// let i = 0;
// while (i <= 2) {
//   console.log(i);
//   i = i + 1;
// }

// let fun1 = () => {};
// i === 10;
// i >= 10;
// i <= 10;

// console.log("anish".split("i"));

// let fun1 = (inputArr) => {
//   let output = inputArr.map((value, index) => {
//     return value * 2;
//   });
//   return output;
// };

// let fun = fun1([1, 2, 3, 4]);
// console.log(fun);

//for loop
//while loop
//do while loop

//initialization
//condition
//afterthought
// let i;
// //i=0
// for (i = 0; i < 3; i = i + 1) {
//   console.log(i); //statement/ loopbody
//   //i=i+1
// }
//Initialization only runs at first.
//condition runs until it meets its requirement.(afterthought is also executed everytime if loopbody is executed)
//For loop repeats until a specified condition evalutes to false.

//while loop

// let i = 0;
// while (i < 100) {
//   console.log(i);
//   i = i + 1;
// }
//if the condition become false, statement with in the loop stops executing.

//do while loop

// let i = 0;

// do {
//   console.log(i);
//   i = i + 1;
// } while (i < 1);

// statement is always executed once before the condition is executed

//Array = []

//map => return
// ()=>{}
//list.map((value,index)=>{})

// let list = ["a", "b", "c"];

// let output = list.map((value, index) => {
//   console.log("anish");
//   return index + value;
// });

// console.log(output);

//Use map method if both input and oupput arrays are same and both input and output's length are same.
//[1,2,3,4] = [2,4,6,8]

// let list = [1, 2, 3, 4];
// let output = list.map((value, index) => {
//   return value * 2;
// });
// console.log(output);

// let fun1 = (inputArr) => {
//   let output = inputArr.map((value, index) => {
//     return value * 2;
//   });
//   return output;
// };

// let fun = fun1([1, 2, 3, 4]);
// console.log(fun);

//split => string to Array => "" =>[]
//join => Array to string => [] => ""

// console.log("anish".split(""));
//[ 'a', 'n', 'i', 's', 'h' ]

// console.log(["a", "n", "i", "s", "h"].join("*"));
// console.log(["a", "n", "i", "s", "h"].join(""));

// let ar1 = [1, 2, 3, 4, 5];
// let ar2 = ar1.find((value, index) => {
//   if (value > 3) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(ar2);

// let ar1 = ["a", "b", "c", "d"];
// let ar2 = ar1.reverse();
// console.log(ar2);

// let ar1 = [1, 2, 3, 4, 5, 6];
// let ar2 = ar1.filter((value, index) => {
//   if (value % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(ar2);

//filter
//()=>{}
//Filter only returns true or false
// let list = ["a", "b", "c"];
// let list1 = list.filter((value, index) => {
//   return true;
// });
// console.log(list1);

// let list = ["a", "b", "c", "d", "e"];
// let output = list.filter((value, index) => {
//   if (value === "f") {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(output);

//[1,2,3,4]= [2,4,6,8]
//[1,2,3,4] = [2,4]
//[1,2,3,4] = [1,3,5]

// [1,2,3,6]= [2,6]

// let input = [1, 2, 3, 6]; //2,6
// let output = input.filter((value, index) => {
//   if (value % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(output);

//find
// let list = [1, 2, 3, 4];
// let list1 = list.find((value, index) => {
//   return true;
// });
// console.log(list1);

//true or false

// let list = ["", 0];

// let output = list.filter(Boolean);
// console.log(output);

//['ram',"hari","shyam","roshan"] =>
//print the value of array which is greater than 4

// let list = ["ram", "hari", "shyam", "roshan"];
// let output = list.filter((value, index) => {
//   if (value.length > 4) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(output);

//for each
// let list = [1, 2, 3];
// let output = list.forEach((value, index) => {
//   //   console.log(value);
//   console.log(index);
// });

//includes
// let list = ["ram", "hari", "shyam", "roshan", "a"];
// let output = list.includes("a");
// console.log(output);

//push => push value to last
//pop => remove last value
//unshift => push value to first
//shift => remove first value

// let list = [1, 2, 3, 4];
// list.push(5);
// list.pop();
// list.unshift(9);
// list.shift();
// console.log(list);

//sort

// let list = ["Z", "anish", "madhav", "roshan", "zed", "john", "sudha", "anisg"];
// let output = list.sort();
// console.log(output);

// slice

//[1,2,3,4]

// let list = [1, 2, 3, 4];
// let newlist = list.slice(2);
// console.log(newlist);

//reduce

//find the sum of all elements of an array

// let list = [1, 2, 3, 4];
// let newlist = list.reduce((previous, current) => {
//   return previous + current;
// }, 0);
// console.log(newlist);

//find the sum of all even elements of an array

// let list = [1, 2, 3, 5, 8, 10];

// let evenList = list.filter((value, index) => {
//   if (value % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(evenList);

// let sumofEven = evenList.reduce((pre, cur) => {
//   return pre + cur;
// }, 0);

// console.log(sumofEven);

//object =>  {}, [{},{},{},{}]

//[1,2,3,4, "ram ","hari"]

//Array is a collection of values whereas object is a collection of key value pairs. key value pairs are called properties.
// let info = {
//   name: "ram",
//   age: 29,
//   isMarried: false,
//   location: "kathmandu",
// };

//get value
// console.log(info.age);
// console.log(info.name);
// console.log(info);
//change value
// info.name = "hari";
// info.age = 50;
// console.log(info);
//delete
// delete info.isMarried;
// console.log(info);

//Duplicate key doesn't exist, if exist override by below code
// let data = {
//   name: "ram",
//   age: 25,
//   name: "roshan",
// };
// console.log(data.name);

// let data = {
//   name: "ram",
//   favFruits: ["apple", "orange"],
//   location: {
//     country: "Nepal",
//     province: "Bagmati",
//     city: "kathmandu",
//   },
//   age: function () {
//     console.log("My name is ram. I am from Nepal");
//   },
// };

// console.log(data.favFruits[1]);
// console.log(data.location.city);
// data.age();

//alias
// Alias means changing variable names. Once you change variable names you can can it by changed name.
// let {
//   name: fullName,
//   age: year,
//   isMarried,
// } = {
//   name: "ram ",
//   age: 25,
//   isMarried: true,
// };

// console.log(fullName, year, isMarried);

//this keyword

// let info = {
//   name: "ram ",
//   surname: "paudel",
//   fullName: function () {
//     console.log(this.name);
//     console.log(this.surname);
//   },
// };
// // console.log(info.name);
// info.fullName();

//Destructuring Assignment
// let planet = ["moon", "sun", "venus"];

// // let planet1 = planet[0];
// // let planet2 = planet[1];

// let [a, b, c, d = "mercury"] = planet;
// console.log(a, b, c, d);

//Spread Operator => ...

// let planet = ["sun ", "moon", "pluto"];

// let [planet1, ...rest] = planet;
// console.log(planet1);
// console.log(rest);

// let name = ["anish", "ram ", "hari", "shyam"];
// let data = ["school", "kathmandu", "nepal"];

// let totalData = [...name, "this is my data", ...data];
// console.log(totalData);

//Number sort
// let list = [9, 4, 7, 2, 5, 8, 1];
// let output = list.sort((a, b) => {
//   return b - a;
// });
// console.log(output);

// let list = ["ram", "anish", "javascript", "az", "john", "hari"];

// let output = list.sort((a, b) => {
//   return a.length - b.length;
// });
// console.log(output);

//convert object into Array
// let info = {
//   name: "ram",
//   age: 30,
//   isMarried: false,
// };

// let keysArray = Object.keys(info);
// console.log(keysArray);
// let valueArray = Object.values(info);
// console.log(valueArray);
// let propertyArray = Object.entries(info);
// console.log(propertyArray);
//[ [ 'name', 'ram' ], [ 'age', 30 ], [ 'isMarried', false ] ]

//convert Array into object
// let info = [
//   ["name", "ram"],
//   ["age", 30],
//   ["isMarried", false],
// ];

// let output = Object.fromEntries(info);
// console.log(output);

//Math
// let data = Math.random(); //[0,1]
// console.log(data);

// let data = Math.random() * 8; //[0,1]* 100
// console.log(data);

// let data = Math.ceil(1.23);
// console.log(data);
// let data1 = Math.floor(1.99);
// console.log(data1);

//scope
//{}
// {
//   let a = 1;
//   console.log(a);
// }
// console.log(a);
// console.log(a);
//A variabale will be known with in its block for the line where it is defined

// {
//   //parent-block
//   let a = 1;
//   {
//     //child-block
//     console.log(a);
//   }
//   console.log(a);
// }
// when a variable is called, first it is searched in its own block, if variable is not find in that block then it will search for its parent block

// {
//   let a = 1;
//   {
//     let a = 10;
//     console.log(a);
//   }
//   console.log(a);
// }
// A variable can not be redefined in the same block. but we can redefine same variable in different block

// == or ===

// console.log("1" == 1); //true, It only sees value
// console.log("1" === 1); //false, It sees value & type

//NaN

// console.log(1 + 1);
// console.log("a" * "b");

// let a;
// console.log(a);
// Undefined means variable is defined but not initialized.

// Rest or spread   ...
//Rest Operator always place at last parameter
// let { age, ...rest } = { name: "ram", age: 20, isMarried: true };

// console.log(name);
// console.log(rest);

// let sum = (a, ...b) => {
//   console.log(a);
//   console.log(b);
// };
// sum(1, 2, 4, 5, 5, 6, 7, 7, 8);

//spread
// let arr = [1, 2, 3, 4, 5];
// let ar1 = ["ram", "john", "tim"];

// let output = [2, 4, ...ar1, 6, 8, ...arr, "javascript"];
// console.log(output);

// let info = { name: "ram", age: 20, isMarried: true };
// let info1 = { ...info };
// // console.log(info1);
// let info2 = { ...info, location: "kathmandu" };
// console.log(info2);

// let error = new Error("this is first error");
// throw error;

// const obj = { name: "John", age: 30, city: "New York" };
// const myJSON = JSON.stringify(obj);
// console.log(myJSON);

// const obj = '{"name":"John", "age":30, "city":"New York"}';
// const data = JSON.parse(obj);
// console.log(data);
