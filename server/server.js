'use strict';

//Dependencias
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//Express
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./src/routes/api'));


//Server
app.listen(8081);
console.log("Server runnning on port 8081");

