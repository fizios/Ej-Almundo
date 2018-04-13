'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const hotels = require('../data/data');

const filtersBy = require('../utils/filters');

exports.getHotels = function(filters) {

  let filteredHotels = hotels;

  Object.keys(filters).forEach(k => {
    filteredHotels = filtersBy.functions[k](filteredHotels, filters[k]);
  });

  return filteredHotels;
};