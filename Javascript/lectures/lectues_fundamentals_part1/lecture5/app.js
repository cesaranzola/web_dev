const currentYear = 2050;
const sarahAge = currentYear - 1989;
const zackage = currentYear - 1980;

//This works because mathematical operators have greater precedence than the comparison operators
//Check MDN  for a table with all the precedence values
console.log(currentYear - 1989 > currentYear - 1980);

//============Exponentiation============
//It's executed from right to left

//============Assignment============
//It's one of the operators with lower precedence
let x, y;
// The subtraction is performed first than the assignment
// Otherwise, x will have be assigned undefined (because y is not defined yet) as its initial value
x = y = 25 - 10 - 5;


//Grouping to the control of the order in which the operations are executed
const averageAge = (sarahAge + zackage) / 2;
console.log(sarahAge, zackage, averageAge);