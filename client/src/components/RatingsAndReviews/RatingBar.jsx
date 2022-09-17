import React from "react";
import { GoTriangleDown } from "react-icons/go";

export default function RatingBar({ metaData }) {
  // for (let currentRating in metaData.ratings) {
  //   totalStars += parseInt(metaData.ratings[currentRating]);

  const characteristics = Object.keys(metaData);
  const descriptions = {
    Comfort: ["Poor", "Perfect"],
    Fit: ["Runs Short", "Runs Long"],
    Length: ["Runs Short", "Runs Long"],
    Quality: ["Poor", "Perfect"],
    Size: ["Too Small", "Too Wide"],
    Width: ["Too Narrow", "Too Wide"],
  };

  return characteristics.map((characteristic) => {
    let barLength = Math.floor(metaData[characteristic].value * 20) * 2;

    return (
      <div
        className="reviews-rating-bar"
        key={characteristic}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "2px",
        }}
      >
        <h3 style={{ margin: "20px 0px 10px 0px" }}>{characteristic}</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              border: "solid lightgray 3px",
              width: `${barLength}px`,
              margin: "-6px",
              padding: "0",
            }}
          ></div>
          <GoTriangleDown
            style={{
              zIndex: "9",
              margin: "0",
              height: "20px",
              padding: "0px 0px 15px 0px",
            }}
          />
          <div
            style={{
              border: "solid lightgray 3px",
              width: `${200 - barLength}px`,
              margin: "-6px",
              padding: "0",
            }}
          ></div>
        </div>
        <div
          className="review-bar-descriptions"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            fontSize: "12px",
            alignItems: "flex-end",
            height: "15px"
          }}
        >
          <p>{descriptions[characteristic][0]}</p>
          <p>{descriptions[characteristic][1]}</p>
        </div>
      </div>
    );
  });
}