import React, { useState } from "react";
const axios = require("axios");

export default function Helpful({ helpfulness, reviewId }) {
  const [helpfulnessRating, setRating] = useState(helpfulness);

  return (
    <div
      id={reviewId}
      style={{display: "flex", flexDirection: "row"}}
      onClick={(e) => {
        axios({
          method: "put",
          url: "/helpful",
          params: {
            reviewId: e.target.id,
          },
        })
          .then(() => {
            setRating(helpfulnessRating + 1);
            return;
          })
          .catch((error) => {
            throw error;
          });
      }}
    >
      <p id={reviewId} style={{textDecoration: "underline", marginTop: "0", marginRight: "5px"}}>Yes</p>
      <p style={{marginTop: "0"}}>({helpfulnessRating})</p>
    </div>
  );
}