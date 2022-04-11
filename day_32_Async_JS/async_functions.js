//======================Async Functions=======================
// A newer and cleaner syntac for working with async code. Syntax makeup for Promises.

//The Async functions always returns a promise.
async function hello() {
    return 'Hey Bro!';
}
hello(); // If the function returns a value, the promise will be resolved with that value 


//The Async functions always returns a promise.
async function bigMistake() {
    throw new Error('Big mistake pal!');
    // If the function throws an exeption, the promise will be rejected.
}
bigMistake();