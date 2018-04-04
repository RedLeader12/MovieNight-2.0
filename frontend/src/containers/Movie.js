import React, { Component } from 'react';
import MovieList from '../controllers/MovieList';

const Movie = props => (
  <div className="Movie">
    <img src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`} alt="" />
    <span> {props.movie.vote_average} </span>
    <span> {props.movie.title} </span>

  </div>
);
export default Movie;
