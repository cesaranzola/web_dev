//=====================Require===========
const Product = require('./models/product');
const mongoose = require('mongoose', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//===============Mongo connection========
main().catch((err) => console.log(err));
async function main() {
  await mongoose
    .connect('mongodb://localhost:27017/farmStand')
    .then(() => {
      console.log('Mongo connection open...');
    })
    .catch((err) => {
      console.log('Error. Unable to establish Mongo connection...');
      console.log(err);
    });
}

//================New instance of Product
// const p = new Product({
//   name: 'Ruby Grapefruit',
//   price: 1.99,
//   category: 'fruit',
// });
// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//===============Insert multiple instances method==========
