import React, { useState } from "react";
const axios = require("axios");

function reportReview(id) {
  axios.put("/report", {
    params: {
      reviewId: e.target.id,
    },
  });
}

export default function Report({ review_id }) {

  const [reported, setReported] = useState(false);
  return (
    <div
      id={review_id}
      style={{textDecoration: "underline"}}
      onClick={(e) => {
        axios({
          method: "put",
          url: "/report",
          params: {
            reviewId: e.target.id,
          },
        })
          .then(() => {
            setReported(true)
            return;
          })
          .catch((error) => {
            throw error;
          });
      }}
    >
      {reported ? 'Reported Successfully' : 'Report'}
    </div>
  );
}
