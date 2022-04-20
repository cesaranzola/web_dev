//=================Require==================
const mongoose = require('mongoose', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//==============Setting connection==========
main().catch((err) => console.log(err));
async function main() {
  await mongoose
    .connect('mongodb://localhost:27017/showApp')
    .then(() => {
      console.log('Connection open...');
    })
    .catch((err) => {
      console.log('Error. Connection request denied.');
      console.log(err);
    });
}

//================Schema=====================
const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});

personSchema.virtual('fullName').get(function () {
  return `${this.first} ${this.last}`;
});

//==================Middleware - presave=======
personSchema.pre('save', async function () {
  console.log('About to save');
});
personSchema.post('save', async function () {
  this.first = 'Yo';
  this.last = 'Mama';
  console.log('Just saved!');
});
//==============Model - Collection===========
const Person = mongoose.model('Person', personSchema);
