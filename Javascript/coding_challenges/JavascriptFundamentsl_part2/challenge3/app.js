const markMiller = {
	name: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function calcBMI() {
		return (this.mass / this.height ** 2).toFixed(2);
	},
};

const johnSmith = {
	name: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function calcBMI() {
		return (this.mass / this.height ** 2).toFixed(2);
	},
};

markMiller.calcBMI() > johnSmith.calcBMI()
	? console.log(
			`Marks's BMI ${markMiller.calcBMI()} is higher than  John's ${johnSmith.calcBMI()}`
	)
	: console.log(
			`John's BMI ${johnSmith.calcBMI()} is higher than  Mark's ${markMiller.calcBMI()}`
	);
