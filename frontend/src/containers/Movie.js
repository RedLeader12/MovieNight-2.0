import React, { Component } from 'react';
import MovieList from '../controllers/MovieList';
import Picture from '../notfound.jpg';
import Styles from '../styles/baseStyling'
import Radium from 'radium';


class Movie extends React.Component {

  render() {

    const imageChecker = this.props.imageChecker(this.props.movie.poster_path);

    return (
      <div style={localStyles.margin}> 
    <div className="Movie" style={localStyles.Movie}>

    <div style={localStyles.imageCrop}> 
      <img src={imageChecker} alt="" style={localStyles.image} />
    </div> 

    <div style={localStyles.info}> 
      <div style={localStyles.title}> 
      <span> {this.props.movie.title} </span>
      </div> 

      <div style={localStyles.details}> 
      <span> {this.props.movie.vote_average} </span>

      <div style={localStyles.elements}> 
      <button onClick={this.props.onClickInfo}> More Info </button>
      <button onClick={this.props.OnClick}> {this.props.buttonName} </button>
      </div> 

      </div> 
    </div> 

    </div>
    </div> 
    );
  }
}




const localStyles = {
  Movie: {
    border: '2px solid green',
    padding: 30,
    width: 230,
  },
  imageCrop: {
    height: '300px',
    border: '2px solid blue',
    display: 'flex',
    justifyContent: 'center'
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
    marginLeft: '-10px',
    fontSize: 15,
    height: 20,
    padding: '5px 5px',
    border: '2px solid blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  details: {
    marginRight: 10,
    border: '2px solid blue',
    height: 35,
    padding: '5px 5px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  elements: {
    border: '2px solid blue',
    display: 'flex',
    justifyContent: 'space-between',
  }

}

export default Radium(Movie);