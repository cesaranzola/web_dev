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

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('cyan', 1000))
//     .then(() => delayedColorChange('violet', 1000))
//     .then(() => delayedColorChange('paleblue', 1000))


// async function rainbow() {
//     delayedColorChange('red', 1000)
//     delayedColorChange('blue', 1000) // This won't work because they are being executed at the same time, blue will win over red in this caser
// }

//The await keyword comes with its calvery to save the day
// async function rainbow() {
//     await delayedColorChange('red', 1000) // This will wait until the Promise is result, and the pass onto the next line of code.
//     await delayedColorChange('orange', 1000)
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('green', 1000)
//     await delayedColorChange('blue', 1000)
//     await delayedColorChange('indigo', 1000)
//     await delayedColorChange('violet', 1000)
//     return 'All done!'
// }

// // rainbow().then(data => console.log('End of rainbow!'))


// async function printRainbow() {
//     await rainbow(); // It waits for the rainbow function to be executed, and then prints the console message.
//     console.log('End of rainbow!');
// }

// printRainbow();


//Fake request function
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4000)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout!');
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay)
    })
}

async function makeTwoRequest() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (err) {
        console.log('Caught an error!');
        console.log('Error is:', err);
    }
}
