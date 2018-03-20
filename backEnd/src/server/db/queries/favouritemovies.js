const knex = require('../connection');

function getAllfavouriteMovies() {
    return knex('favouritemovies')
    .select('*');
  }
  
  module.exports = {
    getAllfavouriteMovies
  };