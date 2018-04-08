import React from 'react';
import Styles from '../styles/baseStyling'
import Radium from 'radium';


class Description extends React.Component {

  render() {

    return (
      <div className="Description" style={localStyles.Grid}>
        <div style={localStyles.subGrid}> 


      <div style={localStyles.block}> 
      <div style={localStyles.buttonBox}> 
      <button onClick={this.props.onClick} style={localStyles.button}> X </button>
      </div> 

      <div style={localStyles.Description}> 
      <span style={localStyles.overview}> {this.props.overview} </span>
      </div> 

      
      </div> 

      </div> 
    </div>
    );
  }
}



const FadeInKeyframes = Radium.keyframes({
  '0%': {opacity: '0'},
  '100%': {opacity: '1'},
}, 'fadeIn');

const localStyles = {
  Grid: {
    // border: '2px solid pink',
    minWidth: '100%',
    minHeight: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(8,12,17,0.95)',
    animation: 'x 0.3s ease-in',
    animationName: FadeInKeyframes,
 
  },
  subGrid: {
    // border: '2px solid blue',
    display: 'flex',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    ':after': {
      content: "",
      zIndex: 100,
      backgroundColor: 'rgba(0,0,0,0.2)'
    }
  },
  block:{
    // border: '5px solid green',
    padding: 0,
    '@media (max-width: 414px)': {
      padding: 7
    },
  },
  Description: {
        // border: '2px solid pink',
    opacity: 0.8,
    marginLeft: 20,
    padding: '10px 20px',
    '@media (min-width: 414px)': {
      fontSize: 15,
    },
    '@media (min-width: 786px)': {
      fontSize: 25,
    },
    '@media (min-width: 900px)': {
      fontSize: 35,

    },
  },
  overview: {
    color: Styles.colours.white
  },
  buttonBox: {
  },
  button: {
    marginRight: 50,
    width: 30,
    height: 30,
    borderRadius: 60,
    background: 'none',
    outline: Styles.colours.white,
    color: Styles.colours.white,
    fontSize: 15,
    fontWeight: 700,
  }
}

export default Radium(Description);