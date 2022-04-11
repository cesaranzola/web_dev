// const fakeRequestPromise = (url) => {
//     return new Promise((data, reject) => {
//         const delay = Math.floor(Math.random() * (4000)) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection timeout!');
//             } else {
//                 data(`Here is your fake data from ${url}.`);
//             }
//         }, delay)
//     })
// }

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log('It worked. (page 1)')
//         console.log(data);
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log('It worked. (page 2)')
//         console.log(data);
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log('It woarked. (page 3)');
//         console.log(data);
//         return fakeRequestPromise('yelp.com.api/coffee/page3')
//     })
//     .catch((reject) => {
//         console.log('Error. The request failed!')
//     })


const fakeRequestPromise = (url) => {
    return new Promise((data, reject) => {
        const delay = Math.floor(Math.random() * (4000)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection timeout.');
            } else {
                data(`Here is your fake data from ${url}`);
            }
        }, delay)
    })
}

fakeRequestPromise('yelp.com/food/API/coffee/pag1')
    .then((data) => {
        console.log('It worked. (page 1)');
        console.log(data);
        return fakeRequestPromise('yelp.com/food/API/coffee/pag2');
    })
    .then((data) => {
        console.log('It worked. (page 2');
        console.log(data);
        return fakeRequestPromise('yelp.com/food/API/coffee/pag3')
    })
    .then((data) => {
        console.log('It worked. (page 3)');
        console.log(data);
    })
    .catch((reject) => {
        console.log('Error.', reject);
    })