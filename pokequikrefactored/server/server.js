const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const mongoose = require('mongoose');

const routes = require('./config/routes.js');

mongoose.connect('mongodb://sergey:sergey@ds057476.mlab.com:57476/pokequik');


const app = express();

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/../public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//app.use(morgan('dev'));

app.use('/', routes.router)


app.listen(port, function() {
	console.log('L1st3n1ng 0n p0rt: ', port);
})