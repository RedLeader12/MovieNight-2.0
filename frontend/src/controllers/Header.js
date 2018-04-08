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
    // border: '2px solid red',
    height: 50, 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
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
  },
  NavigateBox: {
    display: 'flex',
    justifyContent: 'space-between',
    // border: '2px solid blue',
    
    '@media (max-width: 414px)': {
      flexDirection: 'column',
      marginRight: 100
    },  
    '@media (max-width: 630px)': {
      flexDirection: 'column',
      marginRight: 50
    },  
    '@media (max-width: 786px)': {
      flexDirection: 'column',
      marginLeft: -65
    },  
    '@media (max-width: 900px)': {
      marginLeft: -30
    },
    
  },
  SearchBox: {
    // border: '2px solid blue',
    padding: 10,
    marginLeft: -90,
    '@media (max-width: 414px)': {
      padding: 0
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
    '@media (max-width: 414px)': {
      width: 50
    },
    '@media (max-width: 786px)': {
      width: 70
    },
    '@media (min-width: 786px)': {
      width: 180
    },
  }

}

export default Radium(Header);
