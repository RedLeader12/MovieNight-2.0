const knex = require('../connection');

function getAllfavouriteMovies() {
    return knex('favouritemovies')
    .select('*');
  }

function addfavouriteMovie(movie) {
  return knex('favouritemovies')
  .insert(movie)
  .returning('*');
}
  
  module.exports = {
    getAllfavouriteMovies,
    addfavouriteMovie
  };