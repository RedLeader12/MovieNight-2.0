import React, { Component } from 'react';
import MovieList from '../controllers/MovieList';
import Styles from '../styles/baseStyling'
import Radium from 'radium';


class Description extends React.Component {

  render() {

    return (
      <div className="Description">
      <span> {this.props.overview} </span>
      <button onClick={this.props.onClick}> X </button>
    </div>
    );
  }
}

export default Radium(Description);
