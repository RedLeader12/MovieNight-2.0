import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import config from '../config.json';

import MovieController from '../controllers/MovieController';


const Header = (props) => {
  return (
    <div className="Header" style={localStyles.header}>
    <span style={localStyles.Header} style={localStyles.title}> MovieNight ☾ </span>
    <button onClick={props.onClickDiscover}> Discover </button>
    <button onClick={props.onClickFavourites}> Favourites </button>
    <input type="text" name="search" onChange={props.onChange} />
  </div>
  );
};

export default Header;

const localStyles = {
  header: {
   border: '1px solid blue'
  },
  title: {
    color: 'pink'
  }
}