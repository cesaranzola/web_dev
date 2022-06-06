//================OPERATORS ==============================
//==============MATHEMATICAL OPERATORS =================

// const sarahAge = 2050 - 1995;
// const zackage = 2050 - 1987;
// console.log(sarahAge, zackage);

//Refactor code
const currentYear = 2050;
const sarahAge = currentYear - 1995;
const zackage = currentYear - 1987;
console.log(sarahAge, zackage);
console.log(sarahAge * 2, zackage / 3);


//String Concatenation
const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;
console.log(fullName);


//Assignment operator
let x = 10 + 5;

//Shorthand notation
x += 5;
x -+ 4;
x *= 10;
x ++;
x --;
console.log(x);


//Comparison operators
console.log(sarahAge > zackage);
console.log(sarahAge < zackage);
console.log(sarahAge >= 18);

//The precedence of the mathematical operators is greater than the one for comparisons operators
console.log(currentYear - 1995 > currentYear - 1987);

