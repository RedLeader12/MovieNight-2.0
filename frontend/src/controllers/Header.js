import React from 'react';
import Styles from '../styles/baseStyling'
import Radium from 'radium';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  render() {
    const headingTitle = 'Movie Night ☾ ';

    return (
      <div className="Header" style={localStyles.Header}>

        <div style={localStyles.titleBox}> 
        <span style={localStyles.title}> {headingTitle}</span>
        </div> 

        <div style={localStyles.NavigateBox}> 
        <button onClick={this.props.onClickDiscover}style={Styles.buttonNavigate} key='discovers' > 
        <span key='discover'> Discover </span> </button>
        <div> 
        <button onClick={this.props.onClickFavourites} style={Styles.buttonNavigate} key='favourites'> 
        <span key='favourite'> Favourites </span> </button>
        </div> 
        </div> 

        <div style={localStyles.SearchBox}> 
        <input type="text" name="search" onChange={this.props.onChange} style={localStyles.search}/>
        </div> 


      </div>
    );
  }
}

const localStyles = {
  Header: {
    // border: '2px solid red',
    height: 50, 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  titleBox: {
    border: '2px solid blue',
  },
  title: {
    color: 'white',
    fontSize: 30,
  },
  NavigateBox: {
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'center',
    border: '2px solid blue',

  },
  SearchBox: {
    // border: '2px solid blue',
    padding: 10,
    marginLeft: -90
  },
  search: {
    width: 250,
    padding: 10,
    outline: 'none',
    borderTop: Styles.colours.primary,
    borderLeft:Styles.colours.primary,
    borderRight:Styles.colours.primary,
    background: 'none',
    color: 'white',
    fontSize: 15, 
    borderBottom: '2px solid' + Styles.colours.white,
    '@media (max-width: 414px)': {
      width: 70,
    },
  }

}

export default Radium(Header);
