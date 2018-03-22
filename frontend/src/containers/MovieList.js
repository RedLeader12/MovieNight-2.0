import React, { Component } from 'react';
import config from '../config.json'
import axios from 'axios'

import Movie from '../components/Movie.js'

class MovieList extends Component {
    constructor(props) {
    super(props)
        this.state = {
        moviesList: [],
        }
    }

componentDidMount() {
  let self=this;

    window.fetch(config.api)
        .then(function(results) {
        return results.json();
        })
        .then(function(data){
            console.log(data.results)
            self.setState({
            moviesList: data.results
            })
        })
        .catch(function(error) {
        console.log(error)
        });
}

favouriteSelectHandler = (index) => {
    console.log(index)
    let selected = this.state.moviesList[index]
    console.log(selected)

    axios.post('http://localhost:3002/api/v1/favouritemovies', {
        overview: selected.overview,
        poster_path: selected.poster_path,
        release_date: selected.release_date,
        title: selected.title, 
        vote_average: selected.vote_average,
        popularity:selected.popularity 
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  
}

render() {

    let movies = this.state.moviesList.map((movie, index) =>(
        <Movie
        key = {index}
        title={movie.title}
        overview={movie.overview}
        voteAverage={movie.vote_average}
        popularity={movie.popularity}
        posterPath={"https://image.tmdb.org/t/p/w200"+ movie.poster_path}
        onClick={() => this.favouriteSelectHandler(index)}
        /> 
    ))

    return (
        <div className="MovieList">
            {movies}
        </div>
    );
  }
}
    
export default MovieList;