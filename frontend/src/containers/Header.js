import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import config from '../config.json';

import MovieController from '../controllers/MovieController';


const Header = props => (

  <div className="Header">
    <span> MovieNight ☾ </span>
    <button onClick={props.onClickDiscover}> Discover </button>
    <button onClick={props.onClickFavourites}> Favourites </button>
    <input type="text" name="search" onChange={props.onChange} />
  </div>
);

export default Header;
