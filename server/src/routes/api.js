'use strict';

//Dependencias
var express = require('express');
var url = require('url');
var router = express.Router();
var model = require('../model');
require('es6-promise').polyfill();
require('isomorphic-fetch');

//Routes

router.get('/search', function(req, res) {

  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  const filters = JSON.parse(query.filters || {} );
  res.send(model.getHotels(filters));
});


router.get('/hotel/:id', function(req, res) {

});

router.post('/hotel', function(req, res) {

});

router.put('/hotel/:id', function(req, res) {

});

router.delete('/hotel/:id', function(req, res) {

});


//Return router
module.exports = router;