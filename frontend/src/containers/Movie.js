import React, { Component } from 'react';
import MovieList from '../controllers/MovieList';
import Picture from '../notfound.jpg';
import Styles from '../styles/baseStyling'

const Movie = (props) => {
  const imageChecker = props.imageChecker(props.movie.poster_path);

  return (
    <div style={localStyles.margin}> 
    <div className="Movie" style={localStyles.Movie}>

    <div style={localStyles.imageCrop}> 
      <img src={imageChecker} alt="" style={localStyles.image} />
    </div> 

    <div style={localStyles.info}> 
      <div style={localStyles.title}> 
      <span> {props.movie.title} </span>
      </div> 

      <div style={localStyles.details}> 
      <span> {props.movie.vote_average} </span>

      <div style={localStyles.elements}> 
      <button onClick={props.onClickInfo}> More Info </button>
      <button onClick={props.OnClick}> {props.buttonName} </button>
      </div> 

      </div> 
    </div> 

    </div>
    </div> 
  );
};


export default Movie;

const localStyles = {
  margin: {
    flex: 0, 
    marginLeft: 30
  },
  Movie: {
    border: '2px solid green',
    padding: 30,
    textAlign: 'center',
    width: 200
  },
  imageCrop: {
    height: '300px',
    border: '2px solid blue',
  },
  image: {
    borderRadius: 20,
    boxShadow: '1px 10px 1px' + Styles.colours.dark,
    width: 'auto',
    height: '100%',
    overflow: 'hidden',

  },
  info: {
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    marginLeft: '-10px',
    fontSize: 15,
    height: 35,
    padding: '5px 5px',
    border: '2px solid blue',
  },
  details: {
    marginRight: 10,
    border: '2px solid blue',
    height: 35,
    padding: '5px 5px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }

}