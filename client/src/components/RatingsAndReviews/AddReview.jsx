import React, { useState, useEffect } from "react";
import Characteristics from "./Characteristics.jsx";
const axios = require("axios");

export default function AddReview({ productId, toggleShowReview, metaData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [recommend, setRecommend] = useState(false);
  const [comfort, setComfort] = useState(metaData.characteristics.Comfort.id);
  const [fit, setFit] = useState(metaData.characteristics.Width.id);
  const [length, setLength] = useState(metaData.characteristics.Size.id);
  const [quality, setQuality] = useState(metaData.characteristics.Quality.id);


  const backgroundStyling = {
    display: "flex",
    position: "fixed",
    top: "0%",
    left: "0%",
    zIndex: "2",
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
    height: "80vh",
    width: "60vw",
    backgroundColor: "white",
    position: "fixed",
    paddingTop: "40px"
  };

  const reviewData = {
    product_id: parseInt(metaData.product_id),
    rating: 5,
    summary: summary,
    body: body,
    recommend: recommend,
    name: name,
    email: email,
    photos: [],
    characteristics: {
    }
  }

  function sendReview() {
      axios.post('/addReview', reviewData)
      .then((res) => {
        console.log(res);
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
        <label>Nickname: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Summary: </label>
        <input
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        ></input>
        <label>Review: </label>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></input>
        <label>Recommend? </label>
        <input
          type="checkbox"
          value={recommend}
          onChange={() => {setRecommend(true)}}
        ></input>
        <br></br>
        <Characteristics metaData={metaData}/>
        <button type="submit" onClick={sendReview}>Submit</button>
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
