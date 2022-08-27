import React, { useState, useEffect } from 'react';
const Axios = require ('axios');


export default function AddReview ({ productId, toggleShowReview, metaData }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(true);

  const backgroundStyling = {
    margin: '20px',
    position: 'fixed',
    transform: 'translate(-50%, -50%)',
    top: '48%',
    left: '48%',
    zIndex: '2',
    backgroundColor: 'rgba(100,100,100,0.5)',
    width: '110%',
    height: '110%'
  }

  const formStyling = {
    margin: '200px',
    padding: '200px',
    display: 'block',
    height: '200px',
    width: '220px',
    backgroundColor: 'white',
    position: 'fixed',
    transform: 'translate(-50%, -50%)',
    top: '40%',
    left: '40%'
  }

  console.log(metaData)
  return (
    <form style={backgroundStyling}>
      <div style={formStyling}>
        <p onClick={toggleShowReview}>X</p>
        <label>Nickname: </label>
        <input type='text' placeholder="Example: jackson11!" value={name} onChange={(e) => setName(e.target.value)}></input>
        <label>Email: </label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <label>Summary: </label>
        <input type='text' value={summary} onChange={(e) => setSummary(e.target.value)}></input>
        <label>Review: </label>
        <input type='text' value={body} onChange={(e) => setBody(e.target.value)}></input>
        <label>Recommend? </label>
        <input type='checkbox' value={recommend} onChange={(e) => setRecommend(e.target.value)}></input>
        <br></br>
        <label>Comfort: </label>
        <input type="text" value="3"></input>
        <label>Fit: </label>
        <input type="text" value="3"></input>
        <label>Length: </label>
        <input type="text" value="3"></input>
        <label>Quality: </label>
        <input type="text" value="4"></input>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
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