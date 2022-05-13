const neighbors = ['Canada', 'Mexico'];
neighbors.push('Cuba');

console.log(neighbors);

neighbors.pop();
console.log(neighbors);

// Conditional
if (neighbors.includes('Germany')) {
	console.log('The country is located in Europe');
} else {
	console.log(`The country isn't located in central Europe.`);
}

neighbors.unshift('Cuba');
console.log(neighbors);

// IndexOf
console.log(neighbors.indexOf('Cuba'));

neighbors[0] = 'Republic of Cuba';
console.log(neighbors);

neighbors.shift();
console.log(neighbors);


