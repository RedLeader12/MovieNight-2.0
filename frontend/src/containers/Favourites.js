import React, { Component } from 'react';
import config from '../config.json'

class Favourites extends Component {
    constructor(props) {
    super(props)
        this.state = {
        }
    }

componentDidMount() {
let self=this;

window.fetch(config.database)
    .then(function(results) {
    return results.json();
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(error) {
    console.log(error)
    });
}

render() {

    return (
        <div className="Favourites">
            <span> hello </span> 
        </div>
    );
  }
}
    
export default Favourites;
