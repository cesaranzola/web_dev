const myCountry = {
	country: 'United States',
	population: '329.5 million',
	neighboringCountries: ['Canada', 'Mexico', 'Cuba'],
	checkIsIsland: function () {
		return (this.isIsland = neighboringCountries > 0 ? true : false);
	},
};
