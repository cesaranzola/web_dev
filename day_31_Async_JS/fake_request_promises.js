const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.floor() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection timeout')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

fakeRequestCallback('book.com/page1',
    function (response) {
        console.log('It worked!');
        console.log(response);
        fakeRequestCallback('books.com/page2'),
            function (response) {
                console.log('It worked again!');
                console.log(response);
                fakeRequestCallback('books.com/page3',
                    function (response) {
                        console.log('It worked again (3rd request)!');
                        console.log(response);
                    }, function (error) {
                        console.log('Error (3rd request)')
                    })
            },
            function (error) {
                console.log('Error (2nd request!', error);
            }
    }, function (error) {
        console.log('Error', error)
    })