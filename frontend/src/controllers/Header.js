import React, { Component } from 'react';
import MovieController from '../controllers/MovieController';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  render() {
    const headingTitle = 'MovieNight ☾';

    return (
      <div className="Header">
        <span> {headingTitle}</span>
        <button onClick={this.props.onClickDiscover}> Discover </button>
        <button onClick={this.props.onClickFavourites}> Favourites </button>
        <input type="text" name="search" onChange={this.props.onChange} />
      </div>
    );
  }
}

export default Header;
