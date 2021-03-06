//================Require=============
const mongoose = require('mongoose');

//==============Schema===============
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    enum: ['fruit', 'vegetable', 'dairy'],
    lowercase: true,
  },
});

//==============Model=================
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
