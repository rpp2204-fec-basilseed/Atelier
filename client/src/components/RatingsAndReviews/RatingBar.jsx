import React from 'react';

export default function RatingBar ({ type, rating }) {
  console.log(rating)

  let bar = 0;

  // for (let currentRating in metaData.ratings) {
  //   totalStars += parseInt(metaData.ratings[currentRating]);
  // }
  // let barLength = Math.floor((rating / totalStars) * 100);

  return (
    <div className="reviews-rating-bar" style={{display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "2px"}}>
    <h3>{type}</h3>
    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
    <div style={{ border: "solid black 3px", width: "90px", backgroundColor: "black"}}></div>
    <p style={{zIndex: "9", margin: "0", height: "3px", padding: "0px 0px 15px 0px"}}>ello</p>
    <div style={{ border: "solid black 3px", width: "90px", backgroundColor: "black"}}></div>
    </div>
    </div>
  );
};