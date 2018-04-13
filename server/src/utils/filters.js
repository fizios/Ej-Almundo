'use strict';


const filterByName = (hotels, name="") => {

  if (!name) {
    return hotels;
  }

  return hotels.filter(h => h.name.toUpperCase().indexOf(name.toUpperCase()) >= 0)
};

const filterByStars = (hotels, stars=0) => {

  if (!stars) {
    return hotels
  }

  return hotels.filter(h => h.stars === stars);
};

exports.functions = {
  name: filterByName,
  stars: filterByStars
};
