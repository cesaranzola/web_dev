// ================= Calling functions inside another function =================

function percentageOfWorld(population) {
	return ((population / 7900) * 100).toFixed(2);
}

function describePopulation(country, population) {
	const percentage = percentageOfWorld(population);
	return `${country} has a population of ${population} million people, which is about ${percentage}% of the world population.`;
}

const country1 = describePopulation('China', 1441);
// const country2 = describePopulation('United States', 300);

console.log(country1);
