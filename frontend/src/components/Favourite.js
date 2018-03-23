import React, { Component } from 'react';
import FavouritesList from '../containers/FavouritesList';
import Styles from '../styles/baseStyling'

class Favourite extends Component {
  render () {
    return (
        <div className="FavouritesList" style={localStyles.FavouritesList}>
            <img src={this.props.posterPath} /> 
            <span id="title"> {this.props.title} </span>
            <button onClick={this.props.onClick}> Delete Movie </button> 
        </div>
    );
  }
}
export default Favourite;

const localStyles = { 
  FavouritesList: {
    border: '3px solid green',
    width: '15%',
    position: 'relative',
    left: '10.5%',
    marginTop: '11%',
    marginBottom: '10.6%'
  }
}