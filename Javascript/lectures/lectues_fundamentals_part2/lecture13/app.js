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
for (let i = 0; i < userData.length; i++) {
	console.log(userData[i]);
}
