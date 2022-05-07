//=================Variables mutations =================
//let has block scope 
let soccer = 'Sport';
soccer = 'Business';

//You can only reassign values to let or var  variables, if you use constants it will throw an error

//================CONSTANTS ==================
const birthday = '13/04/2015';

// const date; // This is an error, const must be initialized.


//!BY DEFAULT ALWAYS USE CONST, AND ONLY WHEN YOU'RE SURE THE VALUE IS GOING TO MUTATE USE LET
//!THIS IS TO AVOID BUGS

//===================VAR Variables =================
// Var has function scope
// Use to declare variables prior to ES6.
var userName;
userName = 'Emma';


//Some people create variables like this
//!This should be avoided at all cost
animalFarm = true;

//JavaScript will create a property on the global object

