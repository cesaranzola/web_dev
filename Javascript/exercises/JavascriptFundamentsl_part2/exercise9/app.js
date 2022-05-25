const myCountry = {
	country: 'United States',
	population: '329.5 million',
	language: 'English',
	capital: 'Washington D.C',
	neighboringCountries: ['Canada', 'Mexico', 'Cuba'],
	checkIsIsland: function () {
		return (this.isIsland =
			this.neighboringCountries.length > 0
				? "It isn't an island"
				: "It's an island.");
	},
	describeCountry: function () {
		this.checkIsIsland();
		return `${this.country} has a population of ${this.population}, and its capital is ${this.capital}. ${this.isIsland} and has ${this.neighboringCountries.length} neighbors. The official language is ${this.language}.`;
	},
};

console.log(myCountry.describeCountry());
