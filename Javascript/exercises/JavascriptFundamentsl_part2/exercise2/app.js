// ================= Exercise 2 =================
// Function declaration example:
function percentageOfWorld1(population) {
	return ((population / 7900) * 100).toFixed(2) + '%';
}

const country1 = percentageOfWorld1(50);
const country2 = percentageOfWorld1(87);
const country3 = percentageOfWorld1(45);

console.log(country1, country2, country3);

// Function expression example:
const percentage = function percentageOfWorld2(population) {
	return ((population / 7900) * 100).toFixed(2) + '%';
};

const percentage1 = percentage(35);
const percentage2 = percentage(64);
const percentage3 = percentage(256);

console.log(percentage1, percentage2, percentage3);
