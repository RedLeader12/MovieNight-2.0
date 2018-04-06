import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import config from '../config.json';

import Picture from '../notfound.jpg';
import MovieController from './MovieController';
import Movie from '../containers/Movie';
import Description from '../containers/Description';


class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedList: [],
      show: false,
      description: '',
    };
  }

  descriptionShowHandler = (index) => {
    this.setState({ show: true }, function state() {
      console.log(this.state.show);
      this.descriptionSelectHandler(index);
    });
  }

  descriptionSelectHandler = (index) => {
    if (this.state.show === true) {
      const selected = this.props.list[index].overview;
      this.setState({ description: selected }, function state() {
        console.log(this.state.description);
      });
    }
  }

  resetDescriptionHandler = () => {
    this.setState({ description: '', show: false }, function state() {
      console.log(this.state.description);
      console.log(this.state.show);
    });
  };

  imageSelectHandler = (image) => {
    const imageChecker = image;
    if (imageChecker === null) {
      return Picture;
    }
    return `https://image.tmdb.org/t/p/w200${imageChecker}`;
  }

  render() {
    let buttonName = null;
    if (this.props.button === 'discover') {
      buttonName = '♥';
    } else {
      buttonName = 'Delete';
    }

    const list = this.props.list.map((movie, index) => (
      <Movie
        key={movie.id}
        movie={movie}
        index={index}
        onClickInfo={() => this.descriptionShowHandler(index)}
        imageChecker={this.imageSelectHandler}
        show={this.state.show}
        buttonName={buttonName}
      />
    ));

    let overview = null;
    if (this.state.show === true) {
      overview = (<Description
        overview={this.state.description}
        onClick={this.resetDescriptionHandler}
      />);
    } else {
      overview = null;
    }

    return (
      <div>
        {list}
        {overview}
      </div>
    );
  }
}

export default MovieList;
