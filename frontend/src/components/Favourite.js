import React, { Component } from 'react';
import FavouritesList from '../containers/FavouritesList';

class Favourite extends Component {
  render () {
    return (
        <div className="FavouritesList">
            <img src={this.props.posterPath} /> 
            <span id="title"> {this.props.title} </span>
            <button> Select Movie </button> 
        </div>
    );
  }
}
export default Favourite;
