// //==========================Promise==================
// // A Promise function always takes it two parameters as arguments. Usualyy name as 'resolve' & 'reject'.
// new Promise((resolve, reject) => {
//     resolve(); //This will execute the resolve function immediately and it will return an object promise as resolve.
// })

// new Promise((resolve, reject) => {
//     reject(); // This will cause the promise to be reject it immediately 
// })

// new Promise((resolve, reject) => {
//     // If I don't call anything on the function, the Promise objecct will appear as a pending Promise.
// })


//Return a Promise after a second with setTimeOut function
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4000)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection timeout');
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay)
    })
}

fakeRequestPromise('dogs.com/API/food')
    .then((data) => {
        console.log('Done with request.')
        console.log(`Data is:`, data);
    })
    .catch((err) => {
        console.log(`Error 404`, err);
    })