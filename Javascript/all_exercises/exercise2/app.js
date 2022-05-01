// ===============How to declares variables in JavaScript================================
//Var - the old way before ES6
// Var has function scope
var time = 'infinity';
time = 'the end of time'

//Let - to mutable variables
//Let has block scope
let age = 35;

//Const - Immutable variables that don't change
const PI = 3.14159; // Constants are declare in uppercase

const BLUE = rgb(22, 34, 171); // Sometimes you use hard-coded values as constants too for easy development


//! It's considered best practice to always use constants to declare variables, and only use let where you need mutable variables. 
//! This is to avoid bugs in your code

//Variables declare without a name will create a property in the global object
lastName = 'Tindermann'; //
