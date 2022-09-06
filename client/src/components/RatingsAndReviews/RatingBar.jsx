import React from "react";
import { GoTriangleDown } from "react-icons/go";

export default function RatingBar ({ type, rating }) {

  let bar = 0;

  // for (let currentRating in metaData.ratings) {
  //   totalStars += parseInt(metaData.ratings[currentRating]);
  // }
  // let barLength = Math.floor((rating / totalStars) * 100);

  return (
    <div className="reviews-rating-bar" style={{display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "2px"}}>
    <h3>{type}</h3>
    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
    <div style={{ border: "solid black 2px", width: "90px", backgroundColor: "black", margin: "0", padding: "0"}}></div>
    <GoTriangleDown style={{zIndex: "9", margin: "0", height: "20px", padding: "0px 0px 15px 0px"}}/>
    <div style={{ border: "solid black 2px", width: "90px", backgroundColor: "black", margin: "0", padding: "0"}}></div>
    </div>
    </div>
  );
};