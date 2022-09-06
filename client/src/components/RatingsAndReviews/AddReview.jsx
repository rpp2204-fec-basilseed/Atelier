import React, { useState, useEffect } from "react";
import Characteristics from "./Characteristics.jsx";
import OverallRating from "./OverallRating.jsx";
import UploadPhotos from "./UploadPhotos.jsx";
const axios = require("axios");

export default function AddReview({ productId, toggleShowReview, metaData, getReviews }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [recommend, setRecommend] = useState(false);
  const [overall, setOverall] = useState(3);
  const [comfort, setComfort] = useState("");
  const [fit, setFit] = useState("");
  const [length, setLength] = useState("");
  const [quality, setQuality] = useState("");


  const backgroundStyling = {
    display: "flex",
    position: "fixed",
    top: "0%",
    left: "0%",
    zIndex: "1",
    backgroundColor: "rgba(100,100,100,0.5)",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "overlay"
  };

  const formStyling = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "60vh",
    width: "40vw",
    backgroundColor: "white",
    position: "fixed",
    paddingTop: "40px"
  };

  const reviewData = {
    product_id: parseInt(metaData.product_id),
    rating: overall,
    summary: summary,
    body: body,
    recommend: recommend,
    name: name,
    email: email,
    photos: [],
    characteristics: {
    }
  }

  function sendReview(submission) {
      submission.preventDefault();
      axios.post('/addReview', reviewData)
      .then(() => {
        toggleShowReview();
        getReviews('newest');
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <form style={backgroundStyling}>
      <div style={formStyling}>
        <p style={{position: "absolute", top: "0px", right: "20px"}} onClick={() => {toggleShowReview()}}>X</p>
        <h2 style={{position: "absolute", top: "0px", left: "50px"}}>Write Your Review</h2>
        <div className="review-nickname" style={{display: 'flex', flexDirection: "row"}}>
        <label>Nickname: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        </div>
        <div className="review-email" style={{display: 'flex', flexDirection: "row"}}>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        </div>
        <div className="review-summary" style={{display: 'flex', flexDirection: "row"}}>
        <label>Summary: </label>
        <input
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        ></input>
        </div>
        <div className="review-body" style={{display: 'flex', flexDirection: "row"}}>
        <label>Review: </label>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></input>
        </div>
        <label>Recommend? </label>
        <input
          type="checkbox"
          value={recommend}
          onChange={() => {setRecommend(true)}}
        ></input>
        <div className="ratings-overall" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <label style={{paddingRight: "10px"}}>Overall Rating: </label>
        <OverallRating rating={overall} setRating={setOverall}/>
        </div>
        <Characteristics metaData={metaData} reviewData={reviewData}/>
        <UploadPhotos />
        <button type="submit" onClick={(e) => sendReview(e)}>Submit</button>
      </div>
    </form>
  );
}

/*
Required paramaters:

product_id
rating
summary
body
recommend
name
email
photos
characteristics

Review object

{
    "product_id": 71697,
    "rating": 2,
    "summary": "this thing is BAD",
    "body": "I really did not like this product. It had nothing I enjoyed.",
    "recommend": false,
    "name": "user",
    "email": "user@gmail.com",
    "photos": [],
    "characteristics": {"240582": 5, "240583": 5, "240584": 5, "240585": 5 }
}

*/