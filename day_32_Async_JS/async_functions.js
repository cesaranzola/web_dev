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
// const singThird = async () => {
//     throw 'You sing like a cat'
//     return 'Do do do do do'
// }

// singThird()
//     .then((data) => {
//         console.log('Promise resolved with:', data);
//     })
//     .catch((err) => {
//         console.log('Promise rejected');
//         console.log(err);
//     })


// const login = async (username, password) => {
//     if (!username || !password) throw 'Missing credentials'
//     if (password === 'rockingInTheFreeWorld') return 'Welcome again!'
//     throw 'Invalid password'
// }

// login('pepo', 'rockingInTheFreeWorld')
//     .then((msg) => {
//         console.log('Logged In');
//         console.log(msg);
//     })
//     .catch((err) => {
//         console.log('Error 650');
//         console.log(err);
//     })

//The await keyword
//We can only use the await keyword inside of functions declared with async.
//await will pause the execution of the function, waiting for promise to be resolved

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('cyan', 1000))
    .then(() => delayedColorChange('violet', 1000))
    .then(() => delayedColorChange('paleblue', 1000))


