// ================= Calling functions inside another functions =================

function razorFruit(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = razorFruit(apples);
	const orangePieces = razorFruit(oranges);

	const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges pieces.`;
	return juice;
}

console.log(fruitProcessor(2, 5));

// ! Remember the dry principle. D.R.Y  = Don't repeat yourself!
// That's one reason why we call a function inside another function, to avoid repeating lines of code
