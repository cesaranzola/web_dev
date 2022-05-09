// ================= Coding challenge 1 =================
const calcAverage = (score1, score2, score3) => {
	return (score1 + score2 + score3) / 3;
};

function checkWinner(dolphinsAvg, koalasAvg) {
	if (dolphinsAvg >= koalasAvg * 2) {
		return `Dolphins wins ${dolphinsAvg} vs ${koalasAvg}`;
	} else if (koalasAvg >= dolphinsAvg * 2) {
		return `Koalas wins ${koalasAvg} vs ${dolphinsAvg}`;
	} else {
		return `The game was suspended due to weather conditions.`;
	}
}

// First data set
// const dolphins = calcAverage(44, 23, 71);
// const koalas = calcAverage(65, 54, 49);

// const result = checkWinner(dolphins, koalas);
// console.log(result);

// Second data set
const dolphins = calcAverage(85, 54, 41);
const koalas = calcAverage(23, 34, 27);

const result = checkWinner(dolphins, koalas);
console.log(result);

