//================= Precedence =================
const currentYear = 2050;
const sarahAge = currentYear - 1995;
const zackAge = currentYear - 1980;

//Why does this expression run properly?
// Math operators have higher precedence than comparison operators
// Check MDN for full table
console.log(currentYear - 1991 > currentYear - 2020);

//Exponentiation is evaluated from right to left
// Other math operations are evaluated from left to right

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

//Order of operations
const averageAge = sarahAge + zackAge / 2; // First the division is evaluated, and then adds that value to the value of sarahAge
console.log(sarahAge, zackAge, averageAge);

//Refactor code
const averageAgeFixed = (sarahAge + zackAge) / 2;
console.log(sarahAge, zackAge, averageAgeFixed);