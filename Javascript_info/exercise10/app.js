'use strict';
//================= Unary Plus operator doesn't affect numbers ================
let x = 1;
console.log(-x);

let y = 1;
console.log(+y);

//===============Unary Plus operator affects non numbers ================
let notNum = -'1';
console.log(-notNum);

let notNum2 = +'2';
console.log(-notNum2);

//==================Converts not numbers================
let isGameOver = false;
let youWin = true;

console.log(+isGameOver);
console.log(+youWin);

//================Strings Examples =================
let apples = '2';
let oranges = '5';

//Doesn't perform sum with Unary Plus operator
console.log(apples + oranges);

//Perform sum with the Unary Plus operator
console.log(+apples + +oranges);

//================Assignments =================
let result = 34 + 2 + 3; // First evaluates then assigns to the variable result
console.log(result);

//================Assignment returns a value  =================
// let a = 3;
// let b = 2;

// let c = 5 - (a = a + b);

// console.log(c);

//================Chaining =================
let a, b, c;
a = b = c = 2 + 2;

console.log(a);
console.log(b);
console.log(c);

// ================= Modify in place =================
let largeNUm = 4566;
let newLargeNUm = (largeNUm += 343345453543);
console.log(newLargeNUm);

// Short 'modify and assign operators have the same precedence as the assignment operator
let n = 2;
n *= 2 + 4;
console.log(n);

