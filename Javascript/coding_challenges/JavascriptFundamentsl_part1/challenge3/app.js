// Data set 1
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;


// Data set 2
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;

// Data set 3
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;

// Minimum score
const minimumScore = 100;

// Conditional statement

if ((scoreDolphins > scoreKoalas) && (scoreDolphins >= minimumScore)) {
	console.log('Team Dolphins wins the tournament!');
} else if ((scoreKoalas > scoreDolphins) && (scoreKoalas >= minimumScore)) {
	console.log('Team Koalas wins the tournament!');
} else if (
	(scoreDolphins === scoreKoalas) &&
	(scoreDolphins >= minimumScore) &&
	(scoreKoalas >= minimumScore)
) {
	console.log(`Damen und Herren, it was a fierce battle . It's a draw.`);
} else {
	console.log(`Neither team was able to reach the minimum score required to win.`);
}


// ==================================================
// Notes on the video explanation 


