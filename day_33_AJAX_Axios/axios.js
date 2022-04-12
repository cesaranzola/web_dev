//===================AXIOS library=====================
// When the promise is resolved, you immediately get the data, you don't have to parse it like we have to do it with Fetch
// axios.get('https://catfact.ninja/fact')
//     .then(res => {
//         console.log(res.data.fact)
//     })
//     .catch(e => {
//         console.log('Error. Data request denied.', e)
//     })

//============Async Function using Axios==================
// const randomCatFact = async () => {
//     try {
//         const res = await axios.get('https://catfact.ninja/fact');
//         console.log(res.data.fact);
//     } catch (e) {
//         console.log('Error. The request denied.', e);
//     }
// }
// randomCatFact();

//================Axios with passing Headers parameters===================

//The upsides of working with an API
//Making a simple request with an API, and then doing something to update
//what the user sees or change their experience, where the page
//never actually refreshed, we never navigated anywhere else. 


// Select elements to interact with the DOM
// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button'); //Because it's a small example we assume that it's the only button present on the page. For other cases, you need to change this.


// // Async function to add each time a li element (joke in this case) to the DOM
// const addNewJoke = async () => {
//     const jokeText = await getDadJoke();
//     console.log(jokeText);
//     const newLi = document.createElement('li');
//     newLi.append(jokeText);
//     jokes.append(newLi);
// }

// // Async function to extract the joke as a text
// const getDadJoke = async () => {
//     try {
//         const config = { headers: { Accept: 'application/json' } };
//         const res = await axios.get('https://icanhaddzdadjoke.com/', config);
//         return res.data.joke
//     } catch (e) {
//         return 'No Dad jokes available at the moment.'
//     }
// }

// button.addEventListener('click', addNewJoke)



//Select the DOM elements
const button = document.querySelector('button');
const ul = document.querySelector('#jokes');


// Async Function to grab text from API
const getDadJoke = async () => {
    try {
        const header = { headers: { Accept: 'application/json' } };
        const getText = await axios.get('https://icanhazdadjoke.com/', header);
        return getText.data.joke
    } catch (e) {
        return 'No Dad jokes available at the moment.'
    }
}

//Async Function to a new li element to ul by means of the DOM
const addNewJoke = async () => {
    const newLi = document.createElement('li');
    const getJoke = await getDadJoke();
    newLi.append(getJoke);
    ul.append(newLi);
}

//Event listener - Adds a new joke as a new li to the DOM
button.addEventListener('click', addNewJoke)

