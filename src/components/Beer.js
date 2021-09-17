import React, { useState } from 'react';
import './beer.css'

function Beer(props) {
  const { image_url, name, abv, tagline, description } = props.singleBeer;
  const [isLiked, changeLike] = useState(false)

  return (
    <li className='beerListItem'>
      <img 
        className='beerImg' 
        src={image_url} 
        alt={name} 
      />
      <div>
        <h3>{name}</h3>
        <h4>{abv} abv | {tagline}</h4>
        <p>{description}</p>
        <button className='heartBtn' onClick={() => {!isLiked ? changeLike(true) : changeLike(false)}}>
          {isLiked ? 
            <i style={{color: "pink"}} class="fas fa-heart"></i> :
              <i style={{color: "black"}} className="far fa-heart"></i>
          }
        </button>
      </div>
    </li>
  )
}

export default Beer;