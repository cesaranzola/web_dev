//===================AJAX==================
//Asynchronous Javascript and XML

//Make request to load information or send information (to save something) behind the scenes, on given website or application without loading a full page (with its corresponding HTML, CSS, JS files).
//What we get back from these request is plain data formatted in JSON files.

//When programmers use the term API they're refering to Web API( APIs that go over http requests) You make request to particular URLs, which are usually called endpoints. 

//The more useful APIs aren't free. They cost some money.
//XML - Extensivle markup language > In this day you won't see many APIS that will respond with XML or that require you to use XML


//Nowadays instead of using AJAX, you use AJAJ( Asynchronus Javascript JSON files)
//Although people refer to AJAJ with AJAX too, just for the sake of convention
//JSON - It's a format in a data format made for code or others computers to consume
//JSON - Java - script - object - notation  (It has Java - script in the title, but it doesn't have to do anything with Javascript)
//JSON - it's a format for sending data, from me to you. from an API to another API, or to send information to your browser 
//JSON - It's a formatting data that is consistent and predictable, it's based upon Javascript objects syntax, with keys and values pairs

//JSON - Every key has to be doble quote, we can use strings as the values, numbers, other objects and arrays, booleans, null value, 
//JSON - it's use with other languages like Python, Ruby etc, not only Javascript. Different languages have their specific way in which they parse JSON files.

//JSON - You have a method in JS to transfrom JSON files into Javascript.
//JSON - When you make a request to an API, you get back a long haired string


//How to transform JSON formatted data into Javascript
const data = `{"ticker":{"base":"BTC","target":"USD","price":"39820.22217890","volume":"35485.40734724","change":"160.61448509"},"timestamp":1649708825,"success":true,"error":""}`
const parsedData = JSON.parse(data);
let price = parsedData.ticker.price;


//How to transform code from Javascript to JSON
//It is useful if we nedd to send information to an API and the API wants us to send data as JSON

const dog = {
    breed: 'lab',
    color: 'black',
    isAlive: true,
    owner: undefined
}

//JSON is a great format to share information across programming languages, APIS etc
//After I have transform the data from Javascript to JSON, then another language can parse upon receiving it, into its own syntax
let newInfoDog = JSON.stringify(dog);

//APIS respond with JSON, we the can pass that JSON and use it as a Javascript object.

