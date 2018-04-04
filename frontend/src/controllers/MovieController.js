import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import config from '../config.json';


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

    window.fetch(config.api)
      .then(results => results.json())
      .then((data) => {
        console.log(data.results);
        const final = data.results;
        self.setState({
          moviesList: final
        });
      })
      .catch((error) => {
        console.log(error);
      });

    window.fetch(config.database)
      .then(results => results.json())
      .then((data) => {
        const final = data.data;
        self.setState({
          favouritesList: final
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <p> hello </p>
      </div>
    );
  }
}

export default MovieController;

// const localStyles = {
//     // searchBox: {
//     //     width: 300,
//     //     position: 'absolute',
//     //     left: '80%',
//     //     marginTop:  47
//     // },
//     // search: {
//     //     width: 250,
//     //     padding: 5,
//     //     outline: 'none'
//     // }

//   }
