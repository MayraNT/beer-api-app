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
          alt={this.props.singleBeer.name} 
        />
        <div>
          <h3>{this.props.singleBeer.name}</h3>
          <h5>{this.props.singleBeer.abv} abv | {this.props.singleBeer.tagline}</h5>
          <p>{this.props.singleBeer.description}</p>
          <i class="far fa-heart"></i>
        </div>
      </li>
    )
  }
}

export default Beer;