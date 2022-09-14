import React, { useState } from "react";
const axios = require("axios");

export default function ReviewScore ({ recommended, ratings, starRender }) {
  var overall = 0;
  var totalTrue = parseInt(recommended.true)
  var totalRecommends = parseInt(recommended.true) + parseInt(recommended.false)
  var totalRatings = 0;

  const [score, setScore] = useState(0);

  for (let rating in ratings) {
    totalRatings += parseInt(ratings[rating]);
    overall += parseInt(ratings[rating]) * parseInt(rating);
  }

  return (
  <>
  <div style={{display: "flex", flexDirection: "row", fontSize:"64px", margin: "0", height: "50px", alignItems: "flex-start", paddingBottom: "20px"}}>
    {(overall / totalRatings).toFixed(1)}
  <p style={{fontSize: "30px", margin: "10px 20px 5px 15px"}}>{starRender(overall / totalRatings)}</p>
  </div>
  <p>{Math.floor(totalTrue / totalRecommends * 100)}% of reviews recommend this product</p>
  </>
  )
};