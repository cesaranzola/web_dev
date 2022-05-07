//=================Logical Operators =================
// First test - Both values are true

//============ and && operator =================
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// Second test - A is true and B is false
// const hasDriversLicense = true; // A
// const hasGoodVision = false; // B
// console.log(hasDriversLicense && hasGoodVision);

//============= or || operator =================
// const hasDriversLicense = true; // A
// const hasGoodVision = false; // B

// console.log(hasDriversLicense || hasGoodVision);

//============ not ! operator =================
// const hasDriversLicense = true; // A
// const hasGoodVision = false; // B
// console.log(!hasDriversLicense);

//================================================================
// First example

// const hasDriversLicense = true; // A
// const hasGoodVision = false; // B
// if (hasDriversLicense && hasGoodVision) {
// console.log('Sarah can drive.');
// } else {
// console.log('Someone else should drive.');
// }

// Second example

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B
//
// const isTired = true; // C
//
// if (hasDriversLicense && hasGoodVision && isTired) {
// console.log('Sarah can drive.');
// } else {
// console.log('Someone else should drive.');
// }

// Third example

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
	console.log('Sarah can drive.');
} else {
	console.log('Someone else should drive.');
}
