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
  // title: {
  //   fontSize: 35,
  //   position: 'absolute',
  //   left: '4%',
  //   top: '5%'
  // },
  // detailBox: {
  //   border: '1px solid blue',
  //   padding: 10,
  //   display: 'flex',
  //   justifyContent: 'center ',
  //   position: 'absolute',
  //       top: '9%',
  //       left: '50%',
  //       marginRight: '-50%',
  //       transform: 'translate(-50%, -50%)'
  // },
  // favourite: {
  //   marginLeft: 25,   
  // }
}