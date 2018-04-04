import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import config from '../config.json';

import MovieList from './MovieList';
import Styles from '../styles/baseStyling';

class MovieController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesList: [],
      favouritesList: [],

    };
  }

  componentDidMount() {
    const self = this;

    axios.get(config.api)
      .then((res) => {
        console.log(res.data.results);
        self.setState({ moviesList: res.data.results });
      })
      .catch(err => console.log('---errrr', err));
  }

  render() {
    const list = this.state.moviesList;


    return (
      <div>
        <p> hello </p>
        <MovieList list={list} />
      </div>
    );
  }
}

export default MovieController;
