// //==================How to define Fetch===================
// fetch(' https://api.tvmaze.com/shows/1/episodesbydate?date=2013-07-01')
//     .then(res => {
//         console.log('Response, waiting to parse the data', res)
//         return res.json();  // returns a Promise when all the data has been parsed as JSON data.
//         // Not the same as parse(JSON) - This method returns a promise itself when it finishes, 
//         //When all the data is back and it's been passed as JSON, that's why this returns a promise because it is asynchronous
//     })
//     .then(data => {
//         console.log('Data parsed...', data);
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('Error!', err)
//     })

// We Fetch you don't get the data immediately, you don't have the data easily accessible.
//Fetch is going to resolve the Promise trigerring our .then, as soon as it receives  the headers coming back from the API
//Fetch doesn't wait to resolve before all the data is back.
//Fetch after .then has been run, you're not guarantee to be able to access any piece of information
//Fetch you have to use a second method, called .json is not the same as parse(JSON), it's different/
//


//Fetch is not as bad as XML syntax, but you can use libraries like Axios who are even more code effcient.


//Fetch with an Async Function
const fetchSeriesEpisode = async () => {
    try {
        const res = await fetch(' https://api.tvmaze.com/shows/1/episodesbydate?date=2013-07-01')
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log('Error', err);
    }

}