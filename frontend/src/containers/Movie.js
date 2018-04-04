import React, { Component } from 'react';
import MoviesList from '../controllers/MovieList';
import Styles from '../styles/baseStyling'
import Radium from 'radium';

class Movie extends React.Component {
  render () {
    return (
        <div className="Movie" style={localStyles.Movie}>
        <div style={localStyles.MovieBox}> 
            <img id="posterPath" style={localStyles.poster} src={this.props.posterPath}/>
              <h2 id="title" style={localStyles.title} >{this.props.title}</h2>

              <div style={localStyles.detailBox}> 
              <span style={localStyles.voteAverage} >{this.props.voteAverage} </span>
              <button   onClick={this.props.onClickDescription} style={this.props.buttonStyle}> More Info </button> 
              <button onClick={this.props.onClickLike} style={localStyles.likeButton}> ♥ </button> 
              </div> 

              </div> 
        </div>
    );
  }
}
export default Radium(Movie);

const localStyles = { 
  // Movie: {
  //   flex: 5, 
  //   padding: '20px 35px',
  //   border: '2px solid blue'
  // },
  // detailBox: {
  //   border: '1px solid blue'
  // },
  // poster: {
  //   position: 'relative',
  //   left: '10%',
  //   height: 300, 
  // },
  // title: {
  //   border: '1px solid blue',
  //   fontSize: 15,
  //   height: 40,
  //   textAlign: 'center'
  // },
  // likeButton: {
  //   outline: 'none',
  //   border: 'none',
  //   background: Styles.colours.third, 
  //   borderRadius: 100, 
  //   height: 40,
  //   width: 40,
  //   fontSize: 15, 
  //   color: Styles.colours.white,
  //   marginLeft: 10,
  //   transformProperty: 'fontSize',
  //   ':hover':{
  //     fontSize: 20,
  //     background: Styles.colours.yellow
  //   }
  // }
}