//===================Truthy and Falsy values =================

//=============Falsy values=========
// There are five falsy values in JavaScript
// 0, '', undefined, null, NaN

// These values will become false when we convert them to a boolean
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// Values that aren't the above, are considered truthy values.

// The conversion to boolean is the majority of time implicit not explicit
// Because JavaScript performs the coercions internally
// JavaScript boolean coercions when we use logical operators & if else statements

// Boolean coercion example
// const money = 0;
// // JavaScript wil coarse the number store in the money variable to a boolean, so it can evaluate the if else statement
// if(money){ // Because money has 0 as its value, money gets converted to false and prints the else statement
//     console.log(`Don't throw away all your Benjamins`)
// } else {
//     console.log('Time to grab some couple of bucks.')
// }

//If we set a value different than zero, it will be converted to a truthy value
const money = 1023;

if (money) {
	console.log(`Don't throw away all your Benjamins!`);
} else {
	console.log('Time to grab a couple of bucks.');
}

// Another example of Boolean coercion
// let height;
// if (height) {
// 	console.log(`Your height is ${height}`);
// } else {
// 	console.log('Height is undefined.');
// }

let height = 0;
if (height >= 0) {
	console.log(`Your height is ${height}`);
} else {
	console.log('Height is undefined.');
}
