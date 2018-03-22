import React, { Component } from 'react';
import config from '../config.json'

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

render() {
    return (
        <div className="MovieList">

        </div>
    );
  }
}
    
export default MovieList;