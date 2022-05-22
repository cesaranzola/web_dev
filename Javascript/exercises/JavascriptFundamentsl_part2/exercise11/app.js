const populations = [45, 28, 50, 500];

const worldPopulation = 7900;

const percentages = [];

function percentageOfWorld() {
	for (let i = 0; i < populations.length; i++) {
		percentages.push(((populations[i] / worldPopulation) * 100).toFixed(2));
	}
}

percentageOfWorld();
console.log(percentages);
