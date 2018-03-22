import React, { Component } from 'react';
import MoviesList from '../containers/MovieList';

class Movie extends Component {
  render () {
    return (
        <div className="Movie">
            <img id="posterPath" src={this.props.posterPath} />
              <h2 id="title" >{this.props.title}</h2>
              <span>{this.props.voteAverage} </span>
              <span id="popularity">{this.props.popularity} </span>
              <span id="overview">{this.props.overview} </span>
              <button onClick={this.props.onClick}> Favour Movie </button> 
        </div>
    );
  }
}
export default Movie;
