import React from 'react';
import Helpful from './Helpful.jsx';

export default function DisplayReview ({reviewsList}) {
  console.log(reviewsList)
    return reviewsList.slice(0,4).map((review) => {
      return (
        <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
          <div style={{display: 'flex'}}>
            <div>{review.rating} stars</div>
            <div style={{'paddingLeft': '200px'}}>{review.reviewer_name}, {review.date}</div>
          </div>
          <div style={{fontWeight: 'bold'}}>{review.summary}</div>
          <div>{review.body}</div>
          <div className='helpful' style={{paddingTop: '10px', display: 'flex'}}>
          <div style={{paddingRight: '20px'}}>Was this review helpful?</div>
          <Helpful helpfulness={review.helpfulness}/>
          </div>
        </div>
      )
    })
};

/*
Review Structure:

  {
    body: "- If the reviewer recommends buying the product, the text “I recommend this product” and a checkmark icon will display below the review",
    date: "2022-06-07T00:00:00.000Z",
    helpfulness: 118,
    photos: [],
    rating: 5,
    recommend: true,
    response: null,
    review_id: 1275188,
    reviewer_name: "test",
    summary: "love it"
  }


*/