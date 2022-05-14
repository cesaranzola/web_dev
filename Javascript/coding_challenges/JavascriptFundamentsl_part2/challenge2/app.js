// ================= Coding challenge 2 =================
// function calcTip(bill) {
// 	if (bill >= 50 && bill <= 300) {
// 		return `The bill was $${bill} and $${bill * 0.15} for the tip. $${
// 			bill + bill * 0.15
// 		} in total.`;
// 	} else {
// 		return `The bill was $${bill} and $${bill * 0.2} for the tip. $${
// 			bill + bill * 0.2
// 		} in total.`;
// 	}
// }

// Function using ternary operator
function calcTip(bill) {
	return bill >= 50 && bill <= 300
		? `The bill was $${bill} and $${bill * 0.15} for the tip. $${
				bill * 0.15 + bill
		} in total.`
		: `The bill was $${bill} and $${bill * 0.2} for the tip. $${
				bill * 0.2 + bill
		} in total.`;
}

// Data set arrays
let bills = [125, 555, 44];
let tipsBills = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// Total values
console.log(tipsBills[0]);
console.log(tipsBills[1]);
console.log(tipsBills[2]);
