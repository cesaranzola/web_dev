const countryData = {
	country: 'United States',
	language: 'English',
	population: '300 millions',
	neighbors: ['Canada', 'Mexico', 'Cuba'],
	capital: 'Washington D.C',
};

countryData.population = '302 million';
countryData['population'] = '300 million';

console.log(
	`${countryData.country} has a population of ${countryData.population}, ${countryData.neighbors.length} neighboring countries, and his capital is ${countryData.capital}. `
);
