import React, { Component } from 'react';
import MoviesList from '../containers/MovieList';
import Styles from '../styles/baseStyling'

class Movie extends Component {
  render () {
    return (
        <div className="Movie" style={localStyles.Movie}>
            <img id="posterPath" style={localStyles.poster} src={this.props.posterPath}/>
              <h2 id="title" style={localStyles.title} >{this.props.title}</h2>
              <div style={localStyles.detailBox}> 
              <span style={localStyles.voteAverage} >{this.props.voteAverage} </span>
              <button onClick={this.props.onClick} style={localStyles.button}> Favour Movie </button> 
              </div> 
              <div style={localStyles.overviewBox}> 
              <div style={localStyles.descriptionBox}> 
              <span style={localStyles.description} > Description: </span>
              </div> 
              <br style={localStyles.spacing}/> 
              <span id="overview" style={localStyles.overview}>{this.props.overview} </span>
              </div> 
              < br/> 
        </div>
    );
  }
}
export default Movie;

const localStyles = { 
  Movie: {
    flex: 2, 
    border: '3px solid green',
    position: 'relative',
    padding: 22,
  },
  poster: {
    borderRadius: 20, 
    boxShadow: '0px 10px 5px' + Styles.colours.third,
  },
  detailBox: {
    padding: 10
  },
  voteAverage: {
    color: Styles.colours.white, 
  },
  button: {
    outline: 'none',
    padding: 10, 
    fontSize: 12,
    borderRadius: 10, 
    width: '60%',
    color: Styles.colours.white, 
    fontWeight: '600', 
    background: 'linear-gradient(to left,'+ Styles.colours.yellow + ','  + Styles.colours.darkyellow + ')',
    marginLeft: 45,
    border: 'none',
  },
  title: {
    fontSize: 15, 
    color: Styles.colours.white,
  },
  overviewBox: {
    fontSize: 13, 
    marginTop: 15, 
    padding: 15, 
    backgroundColor: Styles.colours.secondary
  },
  descriptionBox: {
    padding: '0px 0px 0px 0px'
  },
  description: {
    fontWeight: '700',
    color: Styles.colours.light,
  },
  overview: {
    color: Styles.colours.white,
    fontSize: 12
  }
}