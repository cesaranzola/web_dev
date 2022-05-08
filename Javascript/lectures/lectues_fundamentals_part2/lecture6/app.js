// Functions Review

const age = (currentYear, yearOfBirth) => currentYear - yearOfBirth;
const yearsLeft = (retirementAge, age) => retirementAge - age;

function yearsUntilRetirement(currentYear, yearOfBirth, retirementAge, name) {
	const ageCalc = age(currentYear, yearOfBirth);
	const year = yearsLeft(retirementAge, ageCalc);
	if (year > 0) {
        // The return keyword immediately returns the value and exits the function
		return `${name} has ${year} years left to retire.`;
	} else {
		// When you received a number as an input, it is considered best practice to return a number, even if the result isn't valid.
		// You can return -1 (to indicate an error)
		return -1;
	}
}

const retireeOne = yearsUntilRetirement(2045, 1990, 65, 'John Locke');
const retireeTwo = yearsUntilRetirement(2045, 1960, 65, 'Winston Churchill');
console.log(retireeOne, retireeTwo);
