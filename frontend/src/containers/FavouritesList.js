import React, { Component } from 'react';
import config from '../config.json'
import axios from 'axios'

import Favourite from '../components/Favourite.js'

class FavouritesList extends Component {
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
}

render() {

    let favourites = this.state.favourites.map((movie, index) =>(
        <Favourite
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
    
export default FavouritesList;
