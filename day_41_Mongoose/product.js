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

//=================Schema=====================
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    //This isn't requiring, but you have to pass in a value that can be transform into an int > '59' > 59
    type: Number,
    required: true,
    min: [0, 'Price value must be a positive integer. Y.D.A'],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String], // It one of the values included in the array of string, isn't a string, it will try to cast the value into a string > 99 > '99'
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ['S', 'M', 'L'],
  },
});

//==================Model > (collection)======================
const Product = mongoose.model('Product', productSchema);

//===================New Instance===============
const bike = new Product({
  name: 'Cycling Jersey',
  price: 35,
  onSale: true,
  categories: ['Cycling', 'Safety', 'Outdoors'],
  size: 'XS',
});
bike
  .save()
  .then((data) => {
    console.log('It worked');
    console.log(data);
  })
  .catch((err) => {
    console.log('Error!');
    console.log(err);
  });

// Product.findOneAndUpdate(
//   {
//     name: 'Pistols',
//   },
//   {
//     price: -19,
//   },
//   { returnNewDocument: true, runValidators: true } // This works the other ones, find in S didn't
// )
//   .then((data) => {
//     console.log('It worked');
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log('Error!');
//     console.log(err);
//   });