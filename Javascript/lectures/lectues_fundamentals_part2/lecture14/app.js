const user = [
	'John',
	'Smith',
	2050 - 1978,
	'agent',
	['Michael', 'Jim', 'Steve'],
];

// Backwards loop

for (let i = user.length - 1; i >= 0; i--) {
	console.log(user[i]);
}

// nested loops
for (let exercise = 1; exercise <= 3; exercise++) {
	console.log(`Starting exercise... ${exercise}`);
	for (let i = 1; i <= 5; i++) {
		console.log(`Exercise ${exercise}: Lifting weights... Rep ${i}`);
	}
}

for (let i = 0; i < user.length; i++) {
	
}
