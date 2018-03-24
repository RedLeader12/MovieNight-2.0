import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MovieList from './containers/MovieList'
import FavouritesList from './containers/FavouritesList'
import Header from './components/Header'

import Styles from './styles/baseStyling'

const headingTitle = 'MovieNight'

const App = () => (
  <div className='App' style={localStyles.App}>
  <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>
  <Header header={headingTitle}/>
    <Switch>
      <Route exact path='/' component={MovieList}/>
      <Route exact path='/favourites' component={FavouritesList}/>
    </Switch>
  </div>
)

export default App;

const localStyles = { 
  App: {
      fontFamily: 'QuickSand, sans-serif'
  },
}