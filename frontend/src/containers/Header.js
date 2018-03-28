import React, { Component } from 'react';

import Styles from '../styles/baseStyling';
import { Link } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props)
        this.state = {
        search: ''
        }
    }


  render () {
    return (
        <div className="Header" style={localStyles.Header}>
            <span style={localStyles.title}> {this.props.header} </span> 
            <Link to='/favourites'><button onClick={this.props.onClick} style={localStyles.button}> Favourites </button></Link> 
            <Link to='/discover'><button onClick={this.props.onClick} style={localStyles.button}> Discover </button></Link> 
            <span> {this.state.search} </span> 
        </div>
    );
  }
}
export default Header;

const localStyles = { 
  Header: {
    border: '2px solid red',
    height: 90
  }
}