// const add = (x, y) => x + y;
// const PI = 3.14159;
// const square = x => x * x;

//Add module exports so you can export access the declare module exports in other files
//Module.exports is an object, and we're addding the following properties to that object
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;


//Different way of defining the object to access it from other files
// const math = {
//     add: add,
//     PI: PI,
//     square: square
// }

// module.exports = math;


//Third way is to add them directly
// module.exports.add = (x, y) => x + y;
// module.exports.PI = 3.14159;
// module.exports.square = x => x * x;


//Shorter way of adding properties to the object
const add = (x, y) => x + y;
const PI = 3.14159;
const square = x => x * x;

exports.add = add;
exports.square = square;
exports.PI = PI;