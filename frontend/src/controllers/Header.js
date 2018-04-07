import React, { Component } from 'react';
import MovieController from '../controllers/MovieController';
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
        <span> {headingTitle}</span>
        </div> 

        <div style={localStyles.NavigateBox}> 
        <button onClick={this.props.onClickDiscover}> Discover </button>
        <button onClick={this.props.onClickFavourites}> Favourites </button>
        </div> 

        <div style={localStyles.SearchBox}> 
        <input type="text" name="search" onChange={this.props.onChange} />
        </div> 


      </div>
    );
  }
}

const localStyles = {
  Header: {
    border: '2px solid red',
    height: 50, 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  titleBox: {
    border: '2px solid blue'
  },
  NavigateBox: {
    border: '2px solid blue'
  },
  SearchBox: {
    border: '2px solid blue'
  },

}

export default Radium(Header);
