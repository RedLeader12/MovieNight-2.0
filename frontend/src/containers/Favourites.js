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

componentWillMount() {
   axios.get(config.database)
   .then(response => {this.setState({favourites: response.data.data})}
)}

render() {

    let favourites = this.state.favourites
    console.log(favourites)

    return (
        <div className="Favourites">
        </div>
    );
  }
}
    
export default Favourites;
