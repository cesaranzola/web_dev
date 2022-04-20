//=================Require==================
const mongoose = require('mongoose', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//==============Setting connection==========
main().catch((err) => console.log(err));
async function main() {
  await mongoose
    .connect('mongodb://localhost:27017/movieApp')
    .then(() => {
      console.log('Connection open...');
    })
    .catch((err) => {
      console.log('Error. Connection request denied.');
      console.log(err);
    });
}

//===============Schema===================
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

//Model name has to be capitalize and singular form > mongoose will pluralize and transform it into lowercase
//===============Model===================
const Movie = mongoose.model('Movie', movieSchema);

//===============Movie Instance==========
const amadeus = new Movie({
  title: 'Amadeus',
  year: 1986,
  score: 9.2,
  rating: 'R',
});
