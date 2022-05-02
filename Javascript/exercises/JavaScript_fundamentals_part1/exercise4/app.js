const averagePopulation = 33000000;

let language = 'German';
let country = 'Germany';
let population = 36000000;
let continent = 'Europe';

population++;


console.log(population / 2);
console.log(population > 6000000);
console.log(population > averagePopulation);

population = '11 million';
country = 'Portugal';
language = 'Portuguese';

console.log(
	`${country} is in ${continent} and its ${population} people speak ${language}.`
);
