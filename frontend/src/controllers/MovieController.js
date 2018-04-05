import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import config from '../config.json';
import { Switch, Route } from 'react-router-dom';

import MovieList from './MovieList';
import Header from '../containers/Header';
// import Styles from '../styles/baseStyling';

class MovieController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesList: [],
      favouritesList: [],
      selectData: [],
      show: 'discover'

    };
  }

  componentDidMount() {
    const self = this;

    axios.get(config.api)
      .then((res) => {
        self.setState({ moviesList: res.data.results });
        console.log(this.state.moviesList);
      })
      .catch(err => console.log('---errrr', err));

    axios.get(config.database)
      .then((res) => {
        self.setState({ favouritesList: res.data.data });
        console.log(this.state.favouritesList);
      })
      .catch(err => console.log('---errrr', err));
  }

  discoverSelectHandler = () => {
    const data = this.state.moviesList;
    this.setState({ selectData: data, show: 'discover' }, function state() {
      console.log(this.state.selectData);
      console.log(this.state.show);
    });
  }

  favouriteSelectHandler = () => {
    const data = this.state.favouritesList;
    this.setState({ selectData: data, show: 'favourites' }, function state() {
      console.log(this.state.selectData);
      console.log(this.state.show);
    });
  }

  render() {
    const headingTitle = 'MovieNight ☾';

    const header =
    (<Header
      title={headingTitle}
      onClickDiscover={this.discoverSelectHandler}
      onClickFavourites={this.favouriteSelectHandler}
    />);

    let list = null;
    if (this.state.show === 'discover') {
      list = this.state.moviesList;
    } else {
      list = this.state.favouritesList;
    }


    return (
      <div>
        {header}
        <MovieList list={list} button={this.state.show} />
      </div>
    );
  }
}

export default MovieController;
