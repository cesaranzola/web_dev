// ================= Coding challenge 1 =================
const calcAvg = (a, b, c) => (a + b + c) / 3;

function checkWinner(teamName1, avg1, teamName2, avg2) {
	if (avg1 >= avg2 * 2) {
		// return `Dolphins wins (${avg1} vs ${avg2}).`;
		console.log(`${teamName1} wins (${avg1} vs ${avg2}) to ${teamName2}.`);
	} else if (avg2 >= avg1 * 2) {
		// return `Koalas wins (${avg2} vs ${dolphinsAvg}).`;
		console.log(
			`${teamName2} wins (${avg2} vs ${avg1}) to the ${teamName1}.`
		);
	} else {
		// return `The game was suspended due to weather conditions.`;
		console.log(`The game was suspended due to weather conditions.`);
	}
}

// First data set
// checkWinner('Dolphins', calcAvg(85, 54, 41), 'Koalas', calcAvg(23, 34, 27));

// Second data set
checkWinner(
	'San francisco 49ers',
	calcAvg(85, 54, 41),
	'Los Angeles Rams',
	calcAvg(23, 34, 27)
);
