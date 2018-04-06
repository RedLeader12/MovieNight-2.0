import React, { Component } from 'react';
import MovieList from '../controllers/MovieList';
import Picture from '../notfound.jpg';

const Movie = (props) => {
  const imageChecker = props.imageChecker(props.movie.poster_path);

  return (
    <div className="Movie">
      <img src={imageChecker} alt="" />
      <span> {props.movie.vote_average} </span>
      <span> {props.movie.title} </span>
      <button onClick={props.onClickInfo}> More Info </button>
      <button onClick={props.OnClick}> {props.buttonName} </button>

    </div>
  );
};


export default Movie;
