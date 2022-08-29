import React from 'react'

export default function Card ({ category, header, price, img, imgalt, icon, rating }) {
  console.log('rating: ', rating)
  return (
    <div className='card'>
      <div className='product-img-container'>
        <img src={img} alt={imgalt}/>
      </div>
      <div className='product-info-container'>
        <h4 className='left-text uppercase'>
          {category}
        </h4>

        <h3 className='left-text'>
          {header}
        </h3>
        <h4 className='left-text'>
          ${price}
        </h4>
        <h2 className='left-text'>
          <a className='link' href={href}>
            {name}
          </a>
        </h2>
        <div className="product-rating-container">
          {rating}
        </div>
      </div>
    </div>
  )
}