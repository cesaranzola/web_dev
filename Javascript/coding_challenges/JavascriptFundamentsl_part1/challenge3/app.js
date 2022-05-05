// Data set 1
// const teamDolphins = (96 + 108 + 89) / 3;
// const teamKoalas = (88 + 91 + 110) / 3;


// Data set 2
// const teamDolphins = (97 + 112 + 101) / 3;
// const teamKoalas = (109 + 95 + 123) / 3;

// Data set 3
const teamDolphins = (97 + 112 + 101) / 3;
const teamKoalas = (109 + 95 + 106) / 3;
console.log(teamDolphins);
console.log(teamKoalas);

// Minimum score
const minimumScore = 100;

// Conditional statement

if ((teamDolphins > teamKoalas) && (teamDolphins >= minimumScore)) {
	console.log('Team Dolphins wins the tournament');
} else if ((teamKoalas > teamDolphins) && (teamKoalas >= minimumScore)) {
	console.log('Team Koalas wins the tournament');
} else if (
	(teamDolphins === teamKoalas) &&
	(teamDolphins >= minimumScore) &&
	(teamKoalas >= minimumScore)
) {
	console.log(`It was a fierce battle Damen und Herren. It's a draw.`);
} else {
	console.log(`Neither team was able to reach the minimum score required to win`);
}
