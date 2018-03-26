import React, { Component } from 'react';
import FavouritesList from '../containers/FavouritesList';
import Styles from '../styles/baseStyling'

class Favourite extends Component {
  render () {
    return (
        <div className="FavouritesList" style={localStyles.FavouritesList}>
            <img style={localStyles.image} src={this.props.posterPath} /> 
            <div style={localStyles.detailBox}> 
            <span style={localStyles.title} id="title"> {this.props.title} </span>
            <button onClick={this.props.onClick} style={localStyles.button}> Delete Movie </button> 
            </div> 
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
    left: 45,
    marginTop: '10%',
    marginBottom: '10.6%',
    padding: 20
  },
  detailBox: {
    marginTop: 15
  },
  image: {
    borderRadius: 20, 
    boxShadow: '0px 10px 5px' + Styles.colours.third,
  },
  title: {
    fontSize: 15,
    color: Styles.colours.white 
  },
  button: {
    outline: 'none',
    padding: 10, 
    fontSize: 12,
    borderRadius: 10, 
    width: '60%',
    color: Styles.colours.white, 
    fontWeight: '600', 
    background: 'linear-gradient(to left,'+ Styles.colours.yellow + ','  + Styles.colours.darkyellow + ')',
    marginLeft: 45,
    marginTop: 20,
    border: 'none',
  }
}