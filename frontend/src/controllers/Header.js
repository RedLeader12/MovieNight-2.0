import React, { Component } from 'react';
import MovieController from '../controllers/MovieController';
import Styles from '../styles/baseStyling'
import Radium from 'radium';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  render() {
    const headingTitle = 'MovieNight ☾';

    return (
      <div className="Header" style={localStyles.Header}>

        <div style={localStyles.titleBox}> 
        <span style={localStyles.title}> {headingTitle}</span>
        </div> 

        <div style={localStyles.NavigateBox}> 
        <button onClick={this.props.onClickDiscover} style={Styles.navigate}> Discover </button>
        <button onClick={this.props.onClickFavourites} style={Styles.navigate}> Favourites </button>
        </div> 

        <div style={localStyles.SearchBox}> 
        <input type="text" name="search" onChange={this.props.onChange} style={localStyles.search}/>
        </div> 


      </div>
    );
  }
}

const localStyles = {
  Header: {
    // border: '2px solid red',
    height: 50, 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  titleBox: {
    // border: '2px solid blue'
  },
  title: {
    color: 'white',
    fontSize: 30
  },
  NavigateBox: {
    // border: '2px solid blue'
  },
  SearchBox: {
    // border: '2px solid blue',
    padding: 10,
    marginLeft: -90
  },
  search: {
    width: 250,
    padding: 10,
    outline: 'none',
    border: 'none',
    background: Styles.colours.primary,
    color: 'white',
    fontSize: 15, 
    borderBottom: '2px solid' + Styles.colours.white
  }

}

export default Radium(Header);
