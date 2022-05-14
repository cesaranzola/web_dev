// ================= Coding challenge 2 =================
function calcTip(bill) {
	if (bill >= 50 && bill <= 300) {
		return `The bill was ${bill} and the tip was ${
			bill * 0.15
		}. The total is ${bill + bill * 0.15}.`;
	} else {
		return `The bill was ${bill} and the tip was ${
			bill * 0.2
		}. The total is ${bill + bill * 0.2}.`;
	}
}
