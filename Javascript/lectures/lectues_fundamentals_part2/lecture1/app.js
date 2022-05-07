'use strict';

// Producing a bug to exemplify how strict mode protects us against bugs
let hasDriversLicense = false;
const passedTest = true;

// The bug is omitting the 's' in the variable name hasDriversLicense
if (passedTest) hasDriversLicense = true; 
// strict mode will alert us that the variable is not defined, and we will be able to catch the error faster
if (hasDriversLicense) console.log('I can drive now!');

// Strict mode will alert us that these words are reserved words in the language, for future define features
const interface = 'Audio'
const private = false; 


