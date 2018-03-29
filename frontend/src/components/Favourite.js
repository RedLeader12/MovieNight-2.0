import React, { Component } from 'react';
import FavouritesList from '../containers/FavouritesList';
import Styles from '../styles/baseStyling'

class Favourite extends Component {
  render () {
    return (
        <div className="FavouritesList" style={localStyles.FavouritesList}>
            <img style={this.props.posterStyle} src={this.props.posterPath} /> 
            <div style={localStyles.detailBox}> 
            <span style={localStyles.title} id="title"> {this.props.title} </span>
            <br /> 
            <button onClick={this.props.onClick} style={localStyles.button}> Delete Movie </button> 
            </div> 
        </div>
    );
  }
}
export default Favourite;

const localStyles = { 
  // FavouritesList: {
  //   border: '2px solid red',
  //   padding: 20,
  // }
}