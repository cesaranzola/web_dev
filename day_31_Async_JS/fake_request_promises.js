const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4000) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection timeout!');
        } else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay)
}


fakeRequestCallback('books.com/pag1', function (response) {
    console.log('It worked!');
    console.log(response);
    fakeRequestCallback('books.com/pag2',
        function (response) {
            console.log('It worked. (2nd request.');
            console.log(response);
            fakeRequestCallback('books.com/pag3',
                function (response) {
                    console.log('It worked. (3rd request.');
                    console.log(response);
                },
                function (err) {
                    console.log('Error! (3rd request)', err)
                })
        },
        function (err) {
            console.log('Error! (2nd request)', err)
        }
    )
}, function (err) {
    console.log('Error!', err)
})