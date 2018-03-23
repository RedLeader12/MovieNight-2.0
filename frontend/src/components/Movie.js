import React, { Component } from 'react';
import MoviesList from '../containers/MovieList';

class Movie extends Component {
  render () {
    return (
        <div className="Movie" style={localStyles.Movie}>
            <img id="posterPath" src={this.props.posterPath} style={localStyles.posterPath}/>
              <h2 id="title" >{this.props.title}</h2>
              <span>{this.props.voteAverage} </span>
              <span id="popularity">{this.props.popularity} </span>
              <span id="overview" style={localStyles.overview}>{this.props.overview} </span>
              <button onClick={this.props.onClick}> Favour Movie </button> 
        </div>
    );
  }
}
export default Movie;

const localStyles = { 
  Movie: {
    border: '3px solid green',
    width: '20%',
    position: 'relative',
    left: '8.5%'

  },
  overview: {

  },
  posterPath: {
    borderRadius: 10,

  }
}