import React, { Component } from 'react';
import MovieController from '../controllers/MovieController';


const Header = props => (
  <div className="Header">
    <span> {props.title} </span>
    <button onClick={props.onClickDiscover}> Discover </button>
    <button onClick={props.onClickFavourites}> Favourites </button>
  </div>
);


export default Header;
