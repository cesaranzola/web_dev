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
