import React, { useState, useEffect } from 'react';
import DisplayReview from './DisplayReview.jsx';
const Axios = require('axios');

export default function Reviews ({currProduct, currReviews, metaData}) {

 console.log('meta:', metaData)

  return (
  <div>
    <h2>Ratings and Reviews</h2>
    <div className='main' style={{display: 'flex'}}>
      <div className='ratings'>
        <div className='stars'>3.5</div>
        <div>5 star reviews: {metaData.ratings ? (metaData.ratings[5] / metaData.ratings.length) : null}</div>
        <div>4 star reviews: {metaData.ratings ? metaData.ratings[4] : null}</div>
        <div>3 star reviews: {metaData.ratings ? metaData.ratings[3] : null}</div>
        <div>2 star reviews: {metaData.ratings ? metaData.ratings[2] : null}</div>
        <div>1 star reviews: {metaData.ratings ? metaData.ratings[1] : null}</div>
        <div className='size-rating-slide'>Size rating goes here</div>
        <div className='comfort-rating-slide'>Comfort rating goes here</div>
      </div>
      <div className='reviews' style={{paddingLeft: '20px'}}>
        <div className='total-reviews'>{currReviews.length} reviews with 'sort by' function goes here</div>
        <DisplayReview reviewsList={currReviews}/>
      </div>
    </div>
  </div>
  )

};