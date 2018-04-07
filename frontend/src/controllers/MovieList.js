import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import config from '../config.json';

import Picture from '../notfound.jpg';
import Movie from '../containers/Movie';
import Description from '../containers/Description';
import Styles from '../styles/baseStyling'


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

  buttonFunctionHandler = (index) => {
    const selected = this.props.list[index];
    console.log(this.props.button);
    if (this.props.button === 'discover') {
      axios.post(config.database, {
        overview: selected.overview,
        poster_path: selected.poster_path,
        release_date: selected.release_date,
        title: selected.title,
        vote_average: selected.vote_average,
        popularity: selected.popularity,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      this.forceUpdate();
    }

    if (this.props.button === 'favourites') {
      this.props.list.splice(index, 1);
      axios.delete(`${config.database}/${selected.id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
      this.forceUpdate();
      return this.props.list;
    }
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
        OnClick={() => this.buttonFunctionHandler(index)}
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
      <div style={localStyles.Grid}>
        {overview}
        {list}
        <div style={localStyles.rectangle}/> 
      </div>
    );
  }
}

export default MovieList;

const localStyles = {
  Grid: {
    // border: '2px solid blue',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '50px 0px'
  },
  rectangle: {
    background: Styles.colours.primary,
    width: '100vw',
    height: 80
  }
}
