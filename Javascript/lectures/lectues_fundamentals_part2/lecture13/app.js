// ================= Loop through an array =================

const userData = [
	'John',
	'Smith',
	2050 - 1987,
	'teacher',
	['Michael', 'Diana', 'Bob'],
];

// Loop through the userDat array - Version 1
// for (let element of userData) {
// 	console.log(element);
// }

// Loop through the userDat array - Version 2
// for (let i = 0; i < userData.length; i++) {
// 	console.log(userData[i], typeof userData[i]);
// }

// Loop through the userDat array - Version 3
// Add values to an array using a for loop
// let userDataTypes = [];
// for (let i = 0; i < userData.length; i++) {
// 	userDataTypes[i] = typeof userData[i];
// }

// console.log(userDataTypes);

// Loop through the userDat array - Version 4
let types = [];
for (let i = 0; i < userData.length; i++) {
	types.push(typeof userData[i]);
}

console.log(types);
