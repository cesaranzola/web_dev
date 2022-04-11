//=================Peomise Fake Request Function========================
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


fakeRequestPromise('yelp.com/api/coffee')
    .then(() => {
        console.log('It worked! (page 1)');
        fakeRequestPromise('yelp.com/api/coffee/pag2')
            .then(() => {
                console.log('It worked! j(page 2)');
                fakeRequestPromise('yelp.com/api/coffee/pag3')
                    .then(() => {
                        console.log('It worked! (page 3)');
                    })
                    .catch(() => {
                        console.log('Promise rejected!(page 3)');
                    })
            })
            .catch(() => {
                console.log('Promise rejected!(page 2)');
            })
    })
    .catch(() => {
        console.log('Promise rejected! (page 1)');
    })