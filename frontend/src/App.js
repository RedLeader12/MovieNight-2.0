import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MovieList from './containers/MovieList'
import FavouritesList from './containers/FavouritesList'

const App = () => (
  <div className='App'>
    <Switch>
      <Route exact path='/' component={MovieList}/>
      <Route exact path='/favourites' component={FavouritesList}/>
    </Switch>
  </div>
)

export default App;
