const markMiller = {
	firstName: 'Mark',
	lastName: 'Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = (this.mass / this.height ** 2).toFixed(2);
		return this.bmi;
	},
};

const johnSmith = {
	firstName: 'John',
	lastName: 'Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = (this.mass / this.height ** 2).toFixed(2);
		return this.bmi;
	},
};


//Data Set 2:
// const markMiller = {
// 	firstName: 'Mark',
// 	lastName: 'Miller',
// 	mass: 97,
// 	height: 1.87,
// 	calcBMI: function () {
// 		this.bmi = (this.mass / this.height ** 2).toFixed(2);
// 		return this.bmi;
// 	},
// };

// const johnSmith = {
// 	firstName: 'John',
// 	lastName: 'Smith',
// 	mass: 67,
// 	height: 1.75,
// 	calcBMI: function () {
// 		this.bmi = (this.mass / this.height ** 2).toFixed(2);
// 		return this.bmi;
// 	},
// };

markMiller.calcBMI() > johnSmith.calcBMI()
	? console.log(
			`${
				markMiller.firstName
			}'s BMI of (${markMiller.bmi}) is higher than ${
				johnSmith.firstName
			}'s (${johnSmith.bmi}).`
	)
	: console.log(
			`${
				johnSmith.firstName
			}'s BMI of (${johnSmith.bmi}) is higher than  ${
				markMiller.firstName
			}'s (${markMiller.bmi}).`
	);
