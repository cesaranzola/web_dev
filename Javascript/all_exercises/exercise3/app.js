//================= Math Operators =================
// const sarahAge = 2100 - 1986;
// const zackAge = 2050 - 1991;
// console.log(sarahAge, zackAge);

//Refactor version
const currentYear = 2050;
const sarahAge = currentYear - 1986;
const zackAge = currentYear - 1991;

console.log(sarahAge, zackAge);

console.log(sarahAge * 2, zackAge / 2, 2 ** 3);

//String Concatenation
let firstName = 'John';
let lastName = 'Ford';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//=============Assignment operators==========
let x = 45 - 21; // Remember that the assignment operator has low precedence

//Short form assignment
//Sum
x += 10;
console.log(x);

//Multiplication operator
x *= 10; 
console.log(x); 

//Add 1
x ++;

//Minus 1
x --;

console.log(x);


//===============Comparisons Operators====================
// > < >= <=
console.log(sarahAge > zackAge);
console.log(sarahAge > 18);

console.log(currentYear - 1991 > currentYear - 2000);







