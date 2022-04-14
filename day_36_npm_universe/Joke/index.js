const giveMeAJoke = require('give-me-a-joke');
const colors = require('colors');

giveMeAJoke.getRandomCNJoke(function (joke) {
    console.log(joke.rainbow);
});

// npm i {packageName} -g
// For the most part you want to install your packages locally 
//npm link {packageName} > To access the global package, when they aren't installed in our local directory