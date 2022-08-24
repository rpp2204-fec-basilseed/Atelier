import React, { useState }from 'react';
const Axios = require ('axios');

export default function Helpful ({ helpfulness, reviewId }) {

  const [helpfulnessRating, setRating] = useState(helpfulness);

  return (
    <div id={reviewId} onClick={(e) => {

      Axios({
        method: 'put',
        url: '/helpful',
        params: {
          reviewId: e.target.id
        }
      })
      .then(()=> {
        setRating(helpfulnessRating + 1);
        return;
      })
      .catch((error) => {
        throw error;
      })
    }}>
      Yes ({helpfulnessRating})
    </div>
  )
}