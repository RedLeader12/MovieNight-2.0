import React, { Component } from 'react';
import config from '../config.json'
import axios from 'axios'

import Styles from '../styles/baseStyling'
import Favourite from '../components/Favourite.js'

class FavouritesList extends Component {
    constructor(props) {
    super(props)
        this.state = {
            favourites: []
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

deleteFavouriteHandler = (index) => {
    let selected = this.state.favourites[index]
    this.state.favourites.splice(index, 1)
    this.setState({favourites: this.state.favourites})
    axios.delete(config.database + '/' + selected.id)
      .then(res => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
}

render() {

    let favourites = this.state.favourites.map((movie, index) =>(
        <Favourite
        key = {index}
        title={movie.title}
        posterPath={"https://image.tmdb.org/t/p/w200"+ movie.poster_path}
        onClick={() => this.deleteFavouriteHandler(index)}
        posterStyle = {Styles.imageStyle}
        /> 
    ))

    console.log(favourites)

    return (
        <div style={Styles.Favouritesbackground}> 
        <div className="Favourites" style={Styles.baseGrid}>
        {favourites}
        </div>
        </div> 
    );
  }
}
    
export default FavouritesList;
