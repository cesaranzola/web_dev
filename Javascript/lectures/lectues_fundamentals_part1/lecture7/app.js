//================Conditionals============================
// const age = 19;

// First approach
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//     console.log('Brett can apply for a driving license now.');
// }

// Second approach
let age = 15;
if (age >= 18) {
	console.log('Brett can apply for a driving license.');
} else {
    const yearsLeft = 18 - age;
    console.log(`Brett cannot apply for a driving license now. Wait ${yearsLeft} years to apply.`);
}

//This is called a if else statement or control structure
let century;

const yearOfBirth = 1968;
if (yearOfBirth <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);