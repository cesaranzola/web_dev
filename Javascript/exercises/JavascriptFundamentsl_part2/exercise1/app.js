// Exercise 1 Functions
function describeCountry(country, population, capitalCity) {
	const locationInfo = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
	return locationInfo;
}

const Heimat = describeCountry('Mexico', '50', 'Ciudad de Mexico - DF');
console.log(Heimat);

