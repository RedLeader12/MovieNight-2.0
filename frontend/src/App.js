import React, { Component } from 'react';


import MovieController from './controllers/MovieController';
import Styles from './styles/baseStyling';

const App = () => (
  <div className="App" style={localStyles.App}>
    <link href="https://fonts.googleapis.com/css?family=Quicksand:500:700" rel="stylesheet" />
    <MovieController />
  </div>
);

export default App;

const localStyles = {
  App: {
    fontFamily: 'QuickSand, sans-serif'
  },
};
