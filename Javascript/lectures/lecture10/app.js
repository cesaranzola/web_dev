//=================Equality Operators =================
const age = 18;
// Whenever you have one line of code, you can skip the curly braces.
// if (age === 18) console.log('You just became an adult');
// the triple equality operator is strict. It doesn't perform type coercion, only returns true when both values are equal.

// the == equal operator is loose. It performs type coercion. age is a number, '18' is a string and yet the loose double equality operator treats them as equal.j
// if (age == '18') console.log('You just became an adult');

//!To avoid bugs in your code, try to avoid using the `==` double equality operator or loose equality operator
// Use the strict '===' equality operator

//===============Prompt Functions =============================
const favoriteNumber = Number(prompt(`What's your favorite number?`));
// console.log(favoriteNumber);

// if (favoriteNumber == '23') {
// 	// Using the loose equality operator
// 	console.log(`That's a cool number!`);
// }

// if (favoriteNumber === 23) {
// 	// Using the strict equality operator
// 	console.log(`That's a cool number!`);
// }

//Else if statements
if (favoriteNumber === 23) {
	console.log(`We run out of lucky numbers`);
} else if (favoriteNumber === 7) {
    console.log(`7 is a nice number!`);
} else if (favoriteNumber === 45){
    console.log(`45 is also a nice number!`);
} else {
    console.log(`${favoriteNumber} is your favorite number!`);
};

//How to check for non equality
if (favoriteNumber !== 23) {
    console.log(`What not ${favoriteNumber} isn't your favorite number?`)
}