import React, { Component } from 'react';
import './beer.css'

class Beer extends Component {
  constructor(props) {
    super(props)

    console.log(this.props.singleBeer)
  }

  render() {
    return (
      <li className='beer'>
        <img 
        className='beerImg' 
        src={this.props.singleBeer.image_url} 
        alt={this.props.singleBeer.name} />
        <h2>{this.props.singleBeer.name}</h2>
        <button>Like Button</button>
      </li>
    )
  }
}

export default Beer;