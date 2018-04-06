import React, { Component } from 'react';
import MovieList from '../controllers/MovieList';
import Picture from '../notfound.jpg';
import Styles from '../styles/baseStyling'

const Movie = (props) => {
  const imageChecker = props.imageChecker(props.movie.poster_path);

  return (
    <div style={localStyles.margin}> 
    <div className="Movie" style={localStyles.Movie}>
      <img src={imageChecker} alt="" style={localStyles.image}/>

      <div style={localStyles.title}> 
      <span> {props.movie.title} </span>
      </div> 

      <div style={localStyles.details}> 
      <span> {props.movie.vote_average} </span>
      <button onClick={props.onClickInfo}> More Info </button>
      <button onClick={props.OnClick}> {props.buttonName} </button>
      </div> 

    </div>
    </div> 
  );
};


export default Movie;

const localStyles = {
  margin: {
    marginLeft: 40
  },
  Movie: {
    border: '2px solid green',
    padding: 50
  },
  image: {
    borderRadius: 20,
    boxShadow: '1px 10px 1px' + Styles.colours.dark 
  },
  title: {
    // border: '2px solid pink',
    textAlign: 'center',
    marginLeft: '-10px',
    padding: '10px 2px'
  },
  details: {
    marginRight: '10px',
    border: '2px solid blue',
    display: 'flex',
  }

}