import React, { Component } from 'react';

import Styles from '../styles/baseStyling'

class Header extends Component {
  render () {
    return (
        <div className="Header" style={localStyles.Header}>
            <span> {this.props.header} </span> 
        </div>
    );
  }
}
export default Header;

const localStyles = { 
  Header: {
    border: '3px solid blue',
    height: '100px',
    position: 'relative',
    width: '100vw'
  }
}