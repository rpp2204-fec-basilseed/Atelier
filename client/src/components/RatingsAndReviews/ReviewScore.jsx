import React from "react";

export default function ReviewScore ({ recommended, ratings, starRender }) {
  var overall = 0;
  var totalTrue = parseInt(recommended.true)
  var totalRecommends = parseInt(recommended.true) + parseInt(recommended.false)
  var totalRatings = 0;

  for (let rating in ratings) {
    totalRatings += parseInt(ratings[rating]);
    overall += parseInt(ratings[rating]) * parseInt(rating);
  }

  return (
  <>
  <div style={{display: "flex", flexDirection: "row", fontSize:"64px", margin: "0", height: "50px", justifyContent: "center", alignItems: "center"}}>
    {(overall / totalRatings).toFixed(1)}
  <p style={{fontSize: "30px", margin: "0"}}>{starRender(overall / totalRatings)}</p>
  </div>
  <p>{Math.floor(totalTrue / totalRecommends * 100)}% of reviews recommend this product</p>
  </>
  )
};