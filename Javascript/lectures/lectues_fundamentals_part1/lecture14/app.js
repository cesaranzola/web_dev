//================= Ternary operator =================
// The ternary operator is best suited for short decisions, or to embedded inside a template literal
// We bigger decisions statements you will want to use always the if else statement

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

// A replica of the above example using an if statement
let drinkZwei;
if (age >= 18) {
    drinkZwei = 'Wine';
} else {
    drinkZwei = 'Water'
}

console.log(drinkZwei);


// Because the ternary operator is an expression, you can use it inside a template literal
console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water' }.`)


