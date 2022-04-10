// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'lightblue';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//         }, 1000)
//     }, 1000)
// }, 1000)


//Function 
const delayedColorTimer = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}


//Nesting callback functions like this, it's consider bad practice, but don't trash the use of multiple callbacks altogether
//Read next example to find why
//Callback hell, refers to scenario in which you add some many nested callback functions, that the code loses readability
delayedColorTimer('red', 1000, () => {
    delayedColorTimer('orange', 1000, () => {
        delayedColorTimer('yellow', 1000, () => {
            delayedColorTimer('green', 1000, () => {
                delayedColorTimer('blue', 1000, () => {
                })
            })
        })
    })
})


//How to set callbacks base on the behaviour you encounter
searchMoviesAPI('Amadeus', () => {
    saveToMyDB(movies, () => {
        //If this works, run this..
    }, () => {
        //If it doesn't work, run this..
    })
}, () => {
    //If API is down or request failed
})