import React from 'react';

export default function Reviews () {
  return (
  <div>
    <h2>Ratings and Reviews</h2>
    <div className='main'>
      <div className='ratings'>
        <div className='stars'>3.5</div>
        <div className='stars-breakdown'>5 4 3 2 1</div>
        <div className='size-rating-slide'>Size rating goes here</div>
        <div className='comfort-rating-slide'>Comfort rating goes here</div>
      </div>
      <div className='reviews'>
        <div className='total-reviews'>Total reviews with sort function goes here</div>
      </div>
    </div>
  </div>
  )
};