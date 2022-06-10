//================Type conversions & coercions ================= 

//Type conversions
// When we manually convert from one type to another

// Coercions 
// JavaScript converts types behind the scenes for us

let inputYear = '1980';
// console.log(inputYear + 18); // This will add 18 as a string

//Number conversion
inputYear = Number(inputYear);
console.log(inputYear + 18); // This will add 18 as a number


// Trying to convert a string that doesn't contain a number wil throw an error
console.log(Number('John')); // > NaN

console.log(typeof NaN); // NaN is actually a number > an invalid number


// Convert to  a String
console.log(String(23)); // this will convert 23 to a string

// All these conversions are generally handle by JavaScript by means of coercions

//=========================================
//============Coercions============
// Plus operator role in type coercions
// Whenever there's a operation between a string and a number JavaScript will convert the number to a string

//String coercions
//Plus operator > converts numbers to strings
console.log('I am ' + 23 + 'years old'); // This is equivalent to the string below
// This coercions happens behind the scenes
console.log('I am ' + '23' + 'years old');

// Minus operator > converts strings to numbers
console.log('23' - '10' - 3);

// Multiplier operator > converts strings to numbers
console.log('23' * '2');

// Division operator > converts strings to numbers
console.log('25' / '2');

//Logical operator > converts strings to numbers
console.log('23' > '10');


// Guess game
//Here the number 1 gets concatenated to the string '1' > forming the string '11'
let n = '1' +  1;
// !Remember that any other operator different than the plus operator converts strings to numbers
// String '11' is converted to number 11 >  11 - 1 > 10
n = n - 1;
// Result is 10
console.log(n);

// Another example
console.log('10' - '4' - '3' - 2 + '5' );