const dobbie = require('./dobbie');
const pappo = require('./pappo');
const cangi = require('./cangi');


const allCats = [dobbie, pappo, cangi];



//When you require an entire directory, node is going to look up for an index file 
//and whatever that file exports is what the directory will export
module.exports = allCats;


