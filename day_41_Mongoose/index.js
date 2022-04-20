const mongoose = require('mongoose', {useNewUrlParser: true, useUnifiedTopology: true});

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:2703417/test')
    .then(() => {
        console.log('Connection opne...');
    })
    .catch(err => {
         console.log('Error. Connection request denied.');
         console.log(err);
    })

}