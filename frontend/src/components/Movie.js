import React, { Component } from 'react';
import MoviesList from '../containers/MovieList';
import Styles from '../styles/baseStyling'

class Movie extends Component {
  render () {
    return (
        <div className="Movie" style={localStyles.Movie}>
            <img id="posterPath" style={localStyles.poster} src={this.props.posterPath}/>
              <h2 id="title" >{this.props.title}</h2>
              <span>{this.props.voteAverage} </span>
              <span id="popularity">{this.props.popularity} </span>
              <span id="overview" style={localStyles.overview}>{this.props.overview} </span>
              < br/> 
              <button onClick={this.props.onClick}> Favour Movie </button> 
        </div>
    );
  }
}
export default Movie;

const localStyles = { 
  Movie: {
    flex: 2, 
    border: '3px solid green',
    position: 'relative',
    padding: 22,
  },
  poster: {
    borderRadius: 20, 
    boxShadow: '0px 10px 5px' + Styles.colours.third,
  }
}