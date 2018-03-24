import React, { Component } from 'react';

import Styles from '../styles/baseStyling'

class Header extends Component {
  render () {
    return (
        <div className="Header" style={localStyles.Header}>
            <span style={localStyles.title}> {this.props.header} </span> 
        </div>
    );
  }
}
export default Header;

const localStyles = { 
  Header: {
    border: '3px solid blue',
    height: '80px',
    position: 'relative',
    zIndex: 1000,
  },
  title: {
    color: Styles.colours.white,
    fontWeight: '500',
    fontSize: 30,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}