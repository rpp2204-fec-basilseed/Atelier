import React from 'react';
const Axios = require ('axios');

export default function Helpful ({ helpfulness, reviewId }) {
  return (
    <div id={reviewId} onClick={(e) => {
      Axios({
        method: 'put',
        url: '/helpful',
        params: {
          productId: e.target.id
        }
      })
      .then(()=> {
        return;
      })
      .catch((error) => {
        throw error;
      })
    }}>
      Yes({helpfulness})
    </div>
  )
}