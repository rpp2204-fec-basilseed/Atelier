import React from 'react';
import Helpful from './Helpful.jsx';

export default function DisplayReview ({reviewsList, displayedReviews, renderStarRating}) {

  const renderDate = (dateISOString) => {
    let dateObject = new Date(dateISOString);
    return dateObject.toDateString();
  }

    return reviewsList.slice(0,displayedReviews).map((review) => {
      return (
        <div key={review.review_id} style={{paddingTop: '10px', paddingBottom: '10px'}}>
          <div style={{display: 'flex'}}>
            <div>{renderStarRating(review.rating)}</div>
            <div style={{'paddingLeft': '200px'}}>{review.reviewer_name}, {renderDate(review.date)}</div>
          </div>
          <div style={{fontWeight: 'bold'}}>{review.summary}</div>
          <div style={{width: '500px', whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{review.body}</div>
          <div className='helpful' style={{paddingTop: '10px', display: 'flex'}}>
          <div style={{paddingRight: '20px'}}>Was this review helpful?</div>
          <Helpful helpfulness={review.helpfulness} reviewId={review.review_id}/>
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