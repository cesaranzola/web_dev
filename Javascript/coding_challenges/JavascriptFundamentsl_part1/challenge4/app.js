// ================= Coding challenge 4 =================
// ================= Initial variable =================

// ================= Data sets =================
// Data set 1:
// let bill = 275;

// Data set 2:
// bill = 40;

// Data set 3:
// bill = 430;

// First Solution

// console.log(
// 	`The bill was ${bill}, the tip was ${
// 		bill >= 50 && bill <= 300 ? 0.15 * bill + ', ' : 0.2 * bill + ', '
// 	} and the total value was ${
// 		bill >= 50 && bill <= 300
// 			? 0.15 * bill + bill + '.'
// 			: 0.2 * bill + bill + '.'
// 	}`
// );

// Second solution
// First data set
// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

// console.log(
// 	`The bill was ${bill}, and tip was ${tip}, the total value was ${
// 		bill + tip
// 	}.`
// );

// Second data set
// const bill = 40;
// const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill

// console.log(
// 	`The bill was ${bill}, and tip was ${tip}, the total value was ${
// 		bill + tip
// 	}.`
// );

// Third data set
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

console.log(
	`The bill was ${bill}, and tip was ${tip}, the total value was ${
		bill + tip
	}.`
);
