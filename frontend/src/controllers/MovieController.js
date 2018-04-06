import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import config from '../config.json';

import MovieList from './MovieList';
import Header from './Header';

class MovieController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesList: [],
      favouritesList: [],
      selectData: [],
      search: '',
      show: 'discover'

    };
  }

  componentDidMount() {
    const self = this;

    axios.get(config.api)
      .then((res) => {
        const final = res.data.results;
        this.decimalChangeHandler(final);
        self.setState({ moviesList: final });
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

  componentDidUpdate() {
    if (this.state.search.length > 0) {
      axios.get(`${config.queryApi + this.state.search}&page=1`)
        .then((res) => {
          const final = res.data.results;
          this.decimalChangeHandler(final);
          this.setState({ moviesList: final });
        })
        .catch(err => console.log('---errrr', err));
    }
  }

  decimalChangeHandler = (list) => {
    list.map((movie) => {
      const number = movie.popularity;
      movie.popularity = Math.round(number * 10) / 10;
      return movie;
    });
  }

  searchInputHandler = (event) => {
    const string = event.target.value;
    const changedString = string.split(' ').join('20%');
    this.setState({ search: changedString }, function state() {
      console.log(this.state.search);
    });
  }

  discoverSelectHandler = () => {
    const data = this.state.moviesList;
    this.setState({ selectData: data, show: 'discover' }, function state() {
      console.log(this.state.selectData);
    });
  }

  favouriteSelectHandler = () => {
    const data = this.state.favouritesList;
    this.setState({ selectData: data, show: 'favourites' }, function state() {
      console.log(this.state.selectData);
    });
  }


  render() {
    const header =
    (<Header
      onClickDiscover={this.discoverSelectHandler}
      onClickFavourites={this.favouriteSelectHandler}
      onChange={this.searchInputHandler}
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
        <MovieList
          list={list}
          button={this.state.show}
          favouritesList={this.state.favouritesList}
          movieControllerComponent={this}
        />
      </div>
    );
  }
}

export default MovieController;
