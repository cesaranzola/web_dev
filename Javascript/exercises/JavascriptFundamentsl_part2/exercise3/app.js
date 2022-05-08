// ================= Arrow functions =================
const worldPopulation = 7900;

const percentageOfWorld = (population, countryName) => {
	return `${countryName} has ${((population / worldPopulation) * 100).toFixed(
		2
	)}% of the world population.`;
};

const country1 = percentageOfWorld(300, 'United States');
const country2 = percentageOfWorld(1441, 'China');

console.log(country1, country2);
