import React from 'react';
import Styles from '../styles/baseStyling'
import Radium from 'radium';


class Movie extends React.Component {

  render() {

    const imageChecker = this.props.imageChecker(this.props.movie.poster_path);

    return (
      <div style={localStyles.margin}> 
    <div className="Movie" style={localStyles.Movie}>

    <div style={localStyles.imageCrop}> 
      <img src={imageChecker} alt="" style={localStyles.image} />
    </div> 

    <div style={localStyles.info}> 
      <div style={localStyles.title}> 
      <span> {this.props.movie.title} </span>
      </div> 

      <div style={localStyles.details}> 
      <span style={localStyles.voteaverage}> {this.props.movie.vote_average} </span>

      <div style={localStyles.elements}> 
      <button onClick={this.props.onClickInfo} style={localStyles.description} key='description' > More Info </button>
      <button onClick={this.props.OnClick} style={localStyles.button} key='button'> {this.props.buttonName} </button>
      </div> 

      </div> 

  
    </div> 

    </div>
    </div> 
    );
  }
}

const localStyles = {
  Movie: {
    background: Styles.colours.third,
    padding: 30,
    width: 230,
  },
  imageCrop: {
    height: '300px',
    // border: '2px solid blue',
    display: 'flex',
    justifyContent: 'center'
  },
  image: {
    borderRadius: 20,
    boxShadow: '1px 10px 1px' + Styles.colours.dark,
    width: 'auto',
    height: '100%',
    overflow: 'hidden',

  },
  info: {
    marginTop: 20,
  },
  title: {
    fontSize: 15,
    height: 30,
    padding: '5px 5px',
    // border: '2px solid blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: Styles.colours.white
  },
  details: {
    // border: '2px solid blue',
    height: 35,
    padding: '5px 5px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  voteaverage: {
    color: Styles.colours.white
  },
  elements: {
    // border: '2px solid blue',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  description: {
    width: 90,
    fontSize: 15,
    textAlign: 'center',
    borderRadius: 80,
    height: 33,
    outline: 'none',
    border: 'none',
    fontWeight: 700,
    margin: 5,
    fontFamily: 'Quicksand',
    color: 'white',
    background: 'linear-gradient(to right,' + Styles.colours.secondaryyellow + ',' + Styles.colours.yellow + ')',
    ':hover': {
      cursor: 'pointer'
    }
  },
  button: {
    borderRadius: 100,
    fontSize: 12,
    fontFamily: 'Quicksand',
    padding: '5px 9px',
    fontWeight: 700,
    background: Styles.colours.third,
    outline: Styles.colours.white,
    color: 'white',
    ':hover': {
      background: Styles.colours.darkyellow,
      fontSize: 15,
      cursor: 'pointer'
    },
    ':active':{
      fontSize: 12, 
    }

  }


}

export default Radium(Movie);