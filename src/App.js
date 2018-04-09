import React from 'react';
import MovieController from './controllers/MovieController';

import Radium from 'radium';
import {StyleRoot} from 'radium';

const localStyles = {
  App: {
    fontFamily: 'QuickSand, sans-serif'
  },
};

const App = () => (
  <StyleRoot> 
  <div className="App" style={localStyles.App}>
    <link href="https://fonts.googleapis.com/css?family=Quicksand:500:700" rel="stylesheet" />
    <MovieController />
  </div>
  </StyleRoot> 
);

export default Radium(App)
