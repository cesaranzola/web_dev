// ================= Functions ======================
// First iteration - Function declaration
// function calcAge(yearOfBirth, currentYear) {
// const age = currentYear - yearOfBirth;
// return age;
// }

// Second iteration - Function declaration
// You can call function declaration before you define them
// function calcAge(yearOfBirth, currentYear) {
// 	return currentYear - yearOfBirth;
// }

// const age1 = calcAge(2001, 2022);
// console.log(age1);

// Third iteration - Function expression - Remember that an expression produces a value, an statement is an action to be executed
// You cannot call function expression before you define them - Hoisting > Check MDN for details 
const age = function (currentYear, yearOfBirth) {
	return currentYear - yearOfBirth;
};

console.log(age(2022, 2001));

// A function is a value, that's why you can store them in a variable


// He prefers to use functions expressions to force himself to define the function, before he uses them
// He stores all of his functions in variables



