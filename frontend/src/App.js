import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MovieList from './containers/MovieList'
import Favourites from './containers/Favourites'

const App = () => (
  <div className='App'>
    <Switch>
      <Route exact path='/' component={MovieList}/>
      <Route exact path='/favourites' component={Favourites}/>
    </Switch>
  </div>
)

export default App;
