//===================Require======================
const express = require('express');
const app = express();
const path = require('path');
const methodOverRide = require('method-override');
const { v4: uuidv4 } = require('uuid');

//==================Use==========================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverRide(require('_method')));

//================View Engine====================
app.set('view engine', 'ejs');
app.set('views', path.join(_dirname, '/views'));

//===================Data========================
const comments = [
    {
        id: uuidv4();
    }
]