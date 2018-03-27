import React, { Component } from 'react';

import Styles from '../styles/baseStyling';
import { Link } from 'react-router-dom';

class Header extends Component {
  render () {
    return (
        <div className="Header" style={localStyles.Header}>
            <span style={localStyles.title}> {this.props.header} </span> 
            <Link to='/favourites'><button onClick={this.props.onClick} style={localStyles.button}> Favourites </button></Link>  
        </div>
    );
  }
}
export default Header;

const localStyles = { 
  // Header: {
  //   height: '80px',
  //   position: 'relative',
  //   zIndex: 1000,
  // },
  // title: {
  //   color: Styles.colours.white,
  //   fontWeight: '500',
  //   fontSize: 30,
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)'
  // },
  // button: {
  //   outline: 'none',
  //   padding: 10, 
  //   fontSize: 13,
  //   borderRadius: 10, 
  //   width: '8%',
  //   color: Styles.colours.white, 
  //   fontWeight: '600', 
  //   background: 'linear-gradient(to left,'+ Styles.colours.yellow + ','  + Styles.colours.darkyellow + ')',
  //   marginLeft: '89%',
  //   marginTop: 20,
  //   border: 'none',
  // }
}