const averagePopulation = 33000000;
let population = 6000000;
const country = 'Portugal'


if (population >= averagePopulation){
    console.log(`${country} with a population of ${population} is ${population - averagePopulation} greater than the ${averagePopulation}`)
} else {
    console.log(`${country} population is ${averagePopulation - population} below average.`)
}