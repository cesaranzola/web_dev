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
//When you define an individual instance, you need to call save
// const amadeus = new Movie({
//   title: 'Amadeus',
//   year: 1986,
//   score: 9.2,
//   rating: 'R',
// });

//==============insertMany()==============
//Same name method in Mongoose as in MongoDB
//When you run the insertMany you don't need to call save in order for them to take effect
Movie.insertMany([
  {
    title: 'Amadeus',
    year: 1986,
    score: 9.2,
    rating: 'R',
  },
  {
    title: 'The Godfather',
    year: 1972,
    score: 9.5,
    rating: 'R',
  },
  {
    title: 'Lawrence of Arabia',
    year: 1950,
    score: 9.8,
    rating: 'R',
  },
  {
    title: 'Departures',
    year: 2007,
    score: 9.4,
    rating: 'R',
  },
  {
    title: 'Almost Famous',
    year: 2000,
    score: 9.2,
    rating: 'R',
  },
]).then((data) => {
  console.log('It worked!');
  console.log(data);
});

//Most of the time, you add individual objects to your DB, not multiple at once, this is for educational purposes.
