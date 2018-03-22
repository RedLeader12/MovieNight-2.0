import React, { Component } from 'react';
import MoviesList from '../containers/MovieList';

class Movie extends Component {
  render () {
    return (
        <div className="Movie">
            <img src={this.props.posterPath} />
              <h2>{this.props.title}</h2>
              <span>{this.props.popularity} </span>
              <span>{this.props.voteAverage} </span>
              <span>{this.props.overview} </span>
              <button> Favour Movie </button> 
        </div>
    );
  }
}
export default Movie;
