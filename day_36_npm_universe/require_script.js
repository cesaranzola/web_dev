s// const math = require('./math'); // When you're referencing a file rather than a module, you have to add the ./ to make it clear you're referencing something in the current diretory
// //Now we have access to the math object and its functionalities
// console.log(math.PI);
// console.log(math.square(4));


//You can destructure the object to define which properties do you want access to
// The add property currently present in the math object is being ignored in the destructuring process.
const { PI, square } = require('./math'); // If you dereference the object, you can ommit the name of the object when calling its methods.
// console.log(PI);
// console.log(square(4));


//How to require an entire directory
const cats = require('./shelter');
console.log(`Require an entire directory:`, cats);