//======================Async Functions=======================
// A newer and cleaner syntac for working with async code. Syntax makeup for Promises.

//The Async functions always returns a promise.
// async function hello() {
//     return 'Hey Bro!';
// }
// hello(); // If the function returns a value, the promise will be resolved with that value 


// //The Async functions always returns a promise.
// async function bigMistake() {
//     throw new Error('Big mistake pal!');
//     // If the function throws an exeption, the promise will be rejected.
// }
// bigMistake();

// How to create an Async Arrow Function
// const sing = async () => {
//     return 'Do Re Mi Fa Sol Ti Do!';
// }
// sing().then((data) => {
//     console.log('Promise resolved with;', data);
// })

//How to throw new Error(argument) with a Async fucntion (arrow function syntax)
// const singReloaded = async () => {
//     throw new Error('I sing just like Bob Dylan'); // if a throw an error inside an Async Functon, the promise won't resolve
//     return 'Do do do do do'
// }
// singReloaded().then((data) => {
//     console.log('Promise resolved with data:', data)
// })

//Abbreviated syntax for throwing an error
const singThird = async () => {
    throw 'You sing like a cat'
    return 'Do do do do do'
}

singThird()
    .then((data) => {
        console.log('Promise resolved with:', data);
    })
    .catch((err) => {
        console.log('Promise rejected');
        console.log(err);
    })
