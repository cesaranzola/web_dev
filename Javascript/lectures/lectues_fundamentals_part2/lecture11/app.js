const userData = {
	firstName: 'Linda',
	lastName: 'Scott',
	yearOfBirth: 1968,
	job: 'Nurse',
	friends: ['Michael', 'Peter', 'Steven'],
	hasDriversLicense: true,
	// Inside objects you need to write the functions as expressions, not as a declaration
	calcAge: function (currentYear, yearOfBirth) {
		return currentYear - yearOfBirth;
	},
};

// Use a method from an object using the dot notation
console.log(userData.calcAge(2054, 1968));

// Use a method from and object using the bracket notation
console.log(userData['calcAge'](2054, 1968));
