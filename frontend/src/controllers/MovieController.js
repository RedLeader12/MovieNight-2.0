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

  componentWillMount() {
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
        this.setState({ favouritesList: res.data.data });
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

  postMovieHandler = (selected, index) => {
    let select = selected

    axios.post(config.database, {
      overview: select.overview,
      poster_path: select.poster_path,
      release_date: select.release_date,
      title: select.title,
      vote_average: select.vote_average,
      popularity: select.popularity,
    })
    .then((res) => {
      axios.get(config.database)
      .then((res) => {
        this.setState({ favouritesList: res.data.data });
        console.log(this.state.favouritesList);
      })
      .catch(err => console.log('---errrr', err));
      })
    .catch((error) => {
      console.log(error);
    });

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
          postRequest={this.postMovieHandler}
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
    background: Styles.colours.primary,
    
  }
}


export default MovieController;

