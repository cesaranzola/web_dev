// ================= Data structures =================

// Bad code example
const friend1 = 'Michael';
const friend2 = 'Steve';
const friend3 = 'Daniel';

// According to him, the two most important data structures in JavaScript are Arrays and Objects.

// ============ Arrays =================
// Literal syntax for declaring an array
const friends = ['Michael', 'Steve', 'Daniel'];

// Second way of describing an array
// new is a keyword in JavaScript
// Array is a function in JavaScript -  you pass the values you want to store in the array
// const years = new Array(1990, 2001, 2002, 2003, 2009);

// How to zero-index in an array
console.log(friends[0]);

// How to use the length property
// The length property isn't zero-indexed
console.log(friends.length);

// You need to pass an expression as the argument of an array
console.log(friends[friends.length - 1]); // friends[friends.length - 1] > this evaluates returns a value

// How to change one value in an array
friends[0] = 'Rambo';
console.log(friends[0]);

// Although you stored the array inside a const, you can change its value because only primitive values are immutable.
// An array isn't an immutable object
// What you can not do, it to replace an entire array for an existing one

// Arrays can store values of multiple types
const name = 'Scott Dalton';
// An array can hold variables, numbers and strings, arrays, objects
const contactDetails = [
	name,
	333456234,
	'33 Street',
	['Mother: Sara', 'Father: Frank'],
];

// Exercise - Calc Age
const calcAge = (currentYear, yearOfBirth) => currentYear - yearOfBirth;

const years = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009];

const age1 = calcAge(2050, years[0]);
const age2 = calcAge(2034, years[1]);
const age3 = calcAge(2067, years[2]);

console.log(age1, age2, age3);

//! You can also put function calls inside an array
const ages = [
	calcAge(2050, years[0]),
	calcAge(2034, years[1]),
	calcAge(2067, years[2]),
];

console.log(ages);
