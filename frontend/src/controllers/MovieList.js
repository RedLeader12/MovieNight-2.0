import React, { Component } from 'react';

import MovieController from './MovieController';
import Movie from '../containers/Movie';
import Styles from '../styles/baseStyling';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const list = this.props.list.map((movie, index) => (
      <Movie
        key={index}
        movie={movie}
      />
    ));

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default MovieList;
