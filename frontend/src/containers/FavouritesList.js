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
    console.log(index)
    console.log(selected.id)
    axios.delete(config.database + '/' + selected.id)
      .then(res => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log(error.config);
      });
}

render() {

    let favourites = this.state.favourites.map((movie, index) =>(
        <Favourite
        key = {index}
        title={movie.title}
        posterPath={"https://image.tmdb.org/t/p/w200"+ movie.poster_path}
        onClick={() => this.deleteFavouriteHandler(index)}
        /> 
    ))

    console.log(favourites)

    return (
        <div className="Favourites" style={localStyles.Favourites}>
        {favourites}
        </div>
    );
  }
}
    
export default FavouritesList;

const localStyles = { 
    Favourites: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 40,
        position: 'absolute',
        top: 0,
        right: 0 ,
        backgroundColor: Styles.colours.primary,
    }
  }