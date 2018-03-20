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

function updatefavouriteMovie(id, movie) {
  return knex('favouritemovies')
  .update(movie)
  .where({ id: parseInt(id) })
  .returning('*');
}

function deletefavouriteMovie(id) {
  return knex('favouritemovies')
  .del()
  .where({ id: parseInt(id) })
  .returning('*');
}

  module.exports = {
    getAllfavouriteMovies,
    addfavouriteMovie,
    updatefavouriteMovie,
    deletefavouriteMovie
  };