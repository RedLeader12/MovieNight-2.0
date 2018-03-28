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
            <div style={localStyles.detailBox}> 
            <Link to='/favourites'><span style={localStyles.favourite}> Favourites </span></Link> 
            <Link to='/discover'><span style={localStyles.discover}> Discover </span></Link> 
            </div> 
        </div>
    );
  }
}
export default Header;

const localStyles = { 
  Header: {
    border: '0.1px solid red',
    height: 90
  },
  title: {
    color: Styles.colours.white, 
    fontSize: 45,
    position: 'absolute',
    top: 25, 
    left: '41%',
  },
  detailBox: {
    border: '2px solid red',
    position: 'absolute',
    top: '14%', 
    left: '45%',
  },
  favourite: {
    color: Styles.colours.white
  },
  discover: {
    color: Styles.colours.white ,
    marginLeft: 5, 
  }
}