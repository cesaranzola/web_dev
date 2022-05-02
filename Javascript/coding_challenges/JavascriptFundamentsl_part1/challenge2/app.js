let markHeight = 1.69;
let markMass = 78;

let johnHeight = 1.95;
let johnMass = 92;

//Calculate BMI
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

//Compare BMI
let markHigherBMI = markBMI > johnBMI;

// Results
if (markBMI > johnBMI) {
	console.log(
		`Mark's BMI of ${Math.floor(
			markBMI
		)} is higher than John's BMI of ${Math.floor(johnBMI)}.`
	);
} else {
	console.log(
		`John's BMI of ${Math.floor(
			johnBMI
		)} is higher than Mark's BMI of ${Math.floor(markBMI)}.`
	);
}