import React, { Component } from 'react';
import FavouritesList from '../controllers/FavouritesList';
import Styles from '../styles/baseStyling'

class Favourite extends Component {
  render () {
    return (
        <div className="FavouritesList" style={localStyles.Favourites}>
            <img style={this.props.posterStyle} src={this.props.posterPath} /> 
            <div style={localStyles.detailBox}> 
            <span style={localStyles.title} id="title"> {this.props.title} </span>
            <br /> 
            <div style={localStyles.button}> 
            <button onClick={this.props.onClick} style={Styles.button}> Delete Movie </button> 
            </div> 
            </div> 
        </div>
    );
  }
}
export default Favourite;

const localStyles = { 
  // Favourites: {
  //   width: 200,
  //   padding: '20px 35px',
  //   border: '2px solid red',
  //   background: Styles.colours.dark
  // },
  // title: {
  //   color: Styles.colours.white
  // },
  // button: {
  //   border: '1px solid blue',
  //   marginTop: 30,

  // }
}