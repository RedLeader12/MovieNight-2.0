import React from 'react';
import MovieList from '../controllers/MovieList';
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

export default Radium(Description);

const localStyles = {
  Grid: {
    // border: '2px solid pink',
    minWidth: '100%',
    minHeight: '60%',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(8,12,17,0.95)'
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
    
  },
  Description: {
    fontSize: 35, 
    opacity: 0.8,
    marginLeft: 20,
    padding: '10px 20px',
    // border: '2px solid pink',
  },
  overview: {
    color: Styles.colours.white
  },
  buttonBox: {
    // border: '2px solid pink',
  },
  button: {
    marginRight: 50,
    width: 30,
    height: 30,
    borderRadius: 60,
    outline: 'none',
    background: 'none',
    outline: Styles.colours.white,
    color: Styles.colours.white,
    fontSize: 15,
    fontWeight: 700
  }
}