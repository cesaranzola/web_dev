//================= Ternary operator =================
// Data 1
// const age = 23;
// age >= 18
// ? console.log('I like to drink wine')
// : console.log('I like to drink water');

// Data 2

const age = 15;
age >= 18
	? console.log('I like to drink beer')
	: console.log('I like to drink Apfelsaft');

// We can use the ternary operator to store a value to a variable, because it is consider an expression. (Produces a value ).
// A ternary operator is compose of the following: an if operator, true or false value.
const drink = age >= 18 ? 'Wine' : 'Water';
console.log(drink);
