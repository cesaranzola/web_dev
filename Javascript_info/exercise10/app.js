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
