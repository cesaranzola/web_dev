// ================= Functions ==========================
function logger() {
	console.log('My name is John Doe.');
}

// Calling / running or invoking a function
logger();

// =================================================================

function fruitProcessor(apples, oranges) {
	console.log(apples, oranges);
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}

// If you want to use the value that the function return after its execution, you have to store the value in a variable
const appleAndOrangeJuice = fruitProcessor(5, 3);
console.log(appleAndOrangeJuice);

const appleJuice = fruitProcessor(6, 0);
console.log(appleJuice);


// Software Development Maxima
// Dry = Don't repeat yourself

