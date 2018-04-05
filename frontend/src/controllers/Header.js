import React, { Component } from 'react';
import MovieController from '../controllers/MovieController';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  searchInputHandler = (event) => {
    const string = event.target.value;
    const changedString = string.split(' ').join('20%');
    this.setState({ search: changedString }, function state() {
      console.log(this.state.search);
    });
  }

  render() {
    const headingTitle = 'MovieNight ☾';

    return (
      <div className="Header">
        <span> {headingTitle}</span>
        <button onClick={this.props.onClickDiscover}> Discover </button>
        <button onClick={this.props.onClickFavourites}> Favourites </button>
        <input type="text" name="search" onChange={this.searchInputHandler} />
      </div>
    );
  }
}

export default Header;
