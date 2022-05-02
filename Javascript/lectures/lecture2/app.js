//=================Data types =================
//-----------------Numbers =================

const { type } = require("express/lib/response");

//Numbers are ints and floats (decimals) contrary to other programming languages that have one for each type of number
let age = 23; // 23.0

//-----------------String==================
let firstName = 'John';


//================Undefined =================
// Value not defined
let time;
console.log(time); // Here undefined is a value
console.log(typeof time); // Here undefined is a type

time = 1914;
console.log(time);
console.log(typeof time);

//================Null================
//Also means an empty value
let noValue = null;
console.log(typeof noValue);

//Returns that null is an object type > This is considered a bug in JavaScript
//This bug hasn't been fixed due to legacy reasons


//================Symbol================
//ES2015
//Defines a unique value that cannot be changed 

//================BigInt =============
// ES2020
//Larger numbers that Number cannot contain
//Add an n to the of the number
let bigInt = 5374586798546854655456354635635464n;


//Javascript has dynamic typing, you don't have to declare the type manually
//Values are what have a type defined, not the variable itself

//You can change the type of the variable without declaring it manually
//In other languages such Scala this is forbidden
let houseNumber = 34; // Int
houseNumber = '34' // String







