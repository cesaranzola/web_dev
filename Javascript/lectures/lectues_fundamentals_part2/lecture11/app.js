const userData = {
	firstName: 'Linda',
	lastName: 'Scott',
	yearOfBirth: 1968,
	job: 'nurse',
	friends: ['Michael', 'Peter', 'Steven'],
	hasDriversLicense: false,
	// Inside objects you need to write the functions as expressions, not as a declaration
	calcAge: function () {
		// Remember the D.R.Y principle
		this.age = 2050 - this.yearOfBirth;
		return this.age; // It's always better to use the 'this' keyword and not hardcode the name of the object
	},
	summaryFunc: function () {
		this.calcAge();
		return (this.summary = `${this.firstName} ${this.lastName} is a ${
			this.age
		}-year old ${this.job}, and she ${
			this.hasDriversLicense
				? "has a driver's license."
				: "doesn't have a driver's license."
		}`);
	},
};

// Use a method from an object using the dot notation
// console.log(userData.calcAge(2054));

// // Use a method from and object using the bracket notation
// console.log(userData['calcAge'](2054));

// Print the age using the age property from the userData object
// You need to calculate the age only and once, and then use the age property to print the value
// console.log(userData.calcAge());
// console.log(userData.age);

console.log(userData.summaryFunc());
console.log(userData.summary);
