const figlet = require('figlet');
const colors = require('colors');
figlet('To Hell and Back /_/', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.red)
});