import React, { Component } from 'react';

class MovieList extends Component {
    constructor(props) {
       super(props)
       this.state = {
         moviesList: [],
        }
    }

render() {
    return (
        <div className="MovieList">
        </div>
    );
    }
}

export default MovieList 