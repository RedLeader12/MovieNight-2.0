import React, { Component } from 'react';
import MovieList from '../controllers/MovieList';


const Description = props => (
  <div className="Description">
    <span> {props.overview} </span> 
    <button onClick={props.onClick}> X </button> 
  </div>
);


export default Description;