import React, { Component } from 'react';
import config from '../config.json'
import axios from 'axios'

import Movie from '../components/Movie.js'

class Favourites extends Component {
    constructor(props) {
    super(props)
        this.state = {
            favourites: [],
        }
    }

componentDidMount() {
    let self=this;

    window.fetch(config.database)
        .then(function(results) {
        return results.json();
        })
        .then(function(data){
            console.log(data.data)
            self.setState({
            favourites: data.data
            })
        })
        .catch(function(error) {
        console.log(error)
        });
//    axios.get(config.database)
//    .then(res => {this.setState({favourites: res.data.data})})
//    .catch(error => console.log(error));
}

render() {

    let favourites = this.state.favourites.map((movie, index) =>(
        <Movie
        key = {index}
        title={movie.title}
        posterPath={"https://image.tmdb.org/t/p/w200"+ movie.poster_path}
        /> 
    ))

    console.log(favourites)

    return (
        <div className="Favourites">
        {favourites}
        </div>
    );
  }
}
    
export default Favourites;
