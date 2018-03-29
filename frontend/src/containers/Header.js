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
            <Link to='/discover'><span style={localStyles.discover}> Discover </span></Link> 
            <Link to='/favourites'><span style={localStyles.favourite}> Favourites </span></Link> 
            </div> 
        </div>
    );
  }
}
export default Header;

const localStyles = { 
  title: {
    fontSize: 35,
    position: 'absolute',
    left: '43%',
    top: '5%'
  },
  detailBox: {
    width: 180, 
    padding: 10,
    position: 'absolute',
    top: '16%',
    left: '35%',
    fontSize: 15
  },
  favourite: {
    marginLeft: 25
  }
}