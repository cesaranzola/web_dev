//Javascript is single threaded
// It onlu proccess one single line at the time

console.log('Sending request to the server!');
setTimeout(() => {
    console.log('Here is your data from the server...')
}, 3000)
console.log('End of file');

//Browser our written in languages like C++
//Browers come with certain WEV APIS that can handle certain tasks in the background(like making request or setTimeout)
//The JS Call Stack recognizes these Web API functions and passes them off to the Browser to take care of
//Once the Browser finishes those tasks, they return and are pushed onto the Stack as a callback
