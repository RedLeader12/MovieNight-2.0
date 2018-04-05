import React, { Component } from 'react';

import MovieController from './MovieController';
import Movie from '../containers/Movie';
import Description from '../containers/Description';
import Styles from '../styles/baseStyling';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      description: ''
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
