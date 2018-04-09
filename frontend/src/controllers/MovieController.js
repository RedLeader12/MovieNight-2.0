import React, { Component } from 'react';
import axios from 'axios';
import config from '../config.json';

import MovieList from './MovieList';
import Header from './Header';
import Styles from '../styles/baseStyling'

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
  
  deleteMovieHandler = (select, index) => {
    this.state.favouritesList.splice(index, 1)
    axios.delete(`${config.database}/${select.id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
    this.setState({favouritesList: this.state.favouritesList})
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
      <div style={localStyles.background}>
          {header}
        <MovieList
          list={list}
          button={this.state.show}
          favouritesList={this.state.favouritesList}
          deleteRequest={this.deleteMovieHandler}
          />
      </div>
    );
  }
}

const localStyles = {
  background: {
    // border: '2px solid red',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    background: Styles.colours.primary
  }
}


export default MovieController;

