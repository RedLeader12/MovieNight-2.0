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
         Discover </button>

        <div> 
        <button onClick={this.props.onClickFavourites} style={Styles.buttonNavigate} key='favourites'> 
        Favourites </button>
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
    border: '2px solid red', 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    '@media only screen and (max-width: 414px)': {
      justifyContent: 'flexStart',
      flexWrap: 'wrap'
    },
    '@media only screen and (max-width: 786px)': {
      justifyContent: 'flexStart',
      flexWrap: 'wrap'
    },
  },
  titleBox: {
    // border: '2px solid blue',

  },
  title: {
    color: 'white',
    fontSize: 30,
    '@media (max-width: 414px)': {
      fontSize: 20,
      marginRight: -30
    },
    '@media (max-width: 630px)': {
      fontSize: 20,
      marginRight: -30
    }, 
    '@media (max-width: 786px)': {
      fontSize: 25
    }, 
  },
  NavigateBox: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '2px solid blue',
    '@media only screen and (max-width: 414px)': {
      flexDirection: 'column',
    },
    '@media only screen and (min-width: 630px)': {
      marginLeft: 100
    },
  },
  SearchBox: {
    border: '2px solid blue',
    padding: 10,
    '@media only screen and (max-width: 414px)': {
      width: '100vw',
      display: 'flex',
      justifyContent: 'center'
    },
   '@media only screen and (max-width: 786px)': {
      width: '100vw',
      display: 'flex',
      justifyContent: 'center'
    },

  },
  search: {
    padding: 10,
    outline: 'none',
    borderTop: Styles.colours.primary,
    borderLeft:Styles.colours.primary,
    borderRight:Styles.colours.primary,
    background: 'none',
    color: 'white',
    fontSize: 15, 
    borderBottom: '2px solid' + Styles.colours.white,
    width: 250

  }

}

export default Radium(Header);
