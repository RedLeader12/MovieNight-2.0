import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MovieList from './containers/MovieList'
import FavouritesList from './containers/FavouritesList'
import Header from './components/Header'

const headingTitle = 'MovieNight'

const App = () => (
  <div className='App'>
  <Header header={headingTitle}/>
    <Switch>
      <Route exact path='/' component={MovieList}/>
      <Route exact path='/favourites' component={FavouritesList}/>
    </Switch>
  </div>
)

export default App;
