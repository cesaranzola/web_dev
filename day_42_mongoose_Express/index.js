//==============Require==============
const express = require('express');
const app = express();
const path = require('path');
const Product = require('./models/product');
const methodOverRider = require('method-overrider');

//=============================================
//===============Mongoose Start================
//This code should go on a separate file
//Let's add it here for simplicity purposes
//=================Require==================
const mongoose = require('mongoose', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

//==============Setting connection==========
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
//===============Mongoose final===================
//==================================================

app.use(express.urlencoded({extended: true}));
app.use(methodOverRider('_method'));

//=============Views Engine==========
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//=============Basic Route=============
app.get('/products', async (req, res) => {
	const products = await Product.find({}); //To Query every product
	res.render('products/index', {products});
});

//======================================================
//If a route goes after get by id route, it bteaks the code
// Because interprets any additional url as an fake id
//TODO: How to fix this behavior

//==============Create a new product==============
app.get('/products/new', (req, res) => {
	res.render('products/new');
});

app.post('/products', async (req, res) => {
	const newProduct = new Product(req.body);
	await newProduct.save();
	res.redirect(`/products/${newProduct._id}`);
});

//===============Updating a product===============
app.get('/products/:id/edit', async (req, res) => {
	const {id} = req.params;
	const product = await Product.findById(id);
	res.render('/products/edit', {product});
});

//=============getById===========================
app.get('/products/:id', async (req, res) => {
	const {id} = req.params;
	const product = await Product.findById(id);
	res.render('products/show', {product});
});
//========================================================

//==============Port Listen==========
app.listen(3000, () => {
	console.log('Listening on the port: 3000...');
});
