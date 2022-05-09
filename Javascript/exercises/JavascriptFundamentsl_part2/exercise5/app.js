// const worldPopulation = 7900;
// const populations = [24, 50, 300, 45];
// let percentages = [];

// function percentageOfWorld(value) {
// 	return ((value / worldPopulation) * 100).toFixed(2) + '%';
// }

// // Bad code example - waiting for loops lectures

// const percentage1 = percentageOfWorld(populations[0]);
// const percentage2 = percentageOfWorld(populations[1]);
// const percentage3 = percentageOfWorld(populations[2]);
// const percentage4 = percentageOfWorld(populations[3]);

// percentages.push(percentage1);
// percentages.push(percentage2);
// percentages.push(percentage3);
// percentages.push(percentage4);

// console.log(percentages);

// if (populations.length > 4) {
// 	console.log(true);
// } else {
// 	console.log(false);
// }

//====================================================================================

const worldPopulation = 7900;
const populations = [24, 50, 300, 45];
let percentages = [];

function percentageOfWorld(value) {
	return ((value / worldPopulation) * 100).toFixed(2) + '% ';
}

function addValue() {
	for (let population of populations) {
		percentages += percentageOfWorld(population);
	}
}

addValue();
console.log(percentages);
