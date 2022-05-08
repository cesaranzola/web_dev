// ================= Arrow Function =================
// ! Arrow Functions don't get the 'this' keyword. Anytime you need to use 'this' to refer to the object, use a function declaration or function expressions
// An arrow function is a special form of a function expressions that is shorter and therefore faster to write

// Function expression
const calcAge = function (yearOfBirth) {
	return currentYear - yearOfBirth;
};

// Arrow function - the are also expressions. They return a value
// You don't need neither the curly braces nor the return keyword ( It is return implicitly)
const calcAge2 = (yearOfBirth, currentYear) => currentYear - yearOfBirth;
const age = calcAge2(2010, 2045);

console.log(age);

//=============== Second example =================
// You can only omit the return keyword when you write a one-line function
const yearsUntilRetirement = (
	yearOfBirth,
	currentYear,
	retirementYear,
	yourName
) => {
	const retirementCalc = retirementYear - (currentYear - yearOfBirth);
	const name = yourName;
	return `${name} will retire in ${retirementCalc} years.`;
};

const result = yearsUntilRetirement(1990, 2050, 63, 'Capataz');
console.log(result);

// VS Code hack
// Select the word > press parenthesis or the symbol you want to, and vs code will wrap it for you
