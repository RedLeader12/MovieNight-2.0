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
    this.setState({ show: !this.state.show }, function state() {
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
    } else {
      this.setState({ description: '' }, function state() {
        console.log(this.state.description);
      });
    }
  }

  render() {
    const list = this.props.list.map((movie, index) => (
      <Movie
        key={movie.id}
        movie={movie}
        index={index}
        onClickInfo={() => this.descriptionShowHandler(index)}
        show={this.state.show}
      />
    ));

    const description =
      (<Description
        overview={this.state.description}
      />);

    const overview = this.state.description;

    return (
      <div>
        {list}
        {overview}
      </div>
    );
  }
}

export default MovieList;
