// Exercise 1 Functions
function describeCountry(country, population, capitalCity) {
	const locationInfo = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
	return locationInfo;
}

const home1 = describeCountry('Mexico', '50', 'Ciudad de Mexico - DF');
const home2 = describeCountry('Argentina', '45', 'Buenos Aires');
const home3 = describeCountry('France', '50', 'Paris');

console.log(home1);
console.log(home2);
console.log(home3);
