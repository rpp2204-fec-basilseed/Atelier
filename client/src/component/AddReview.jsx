import React, { useState, useEffect } from 'react';
const Axios = require ('axios');


export default function AddReview ({ productId }) {

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
    width: '200px',
    backgroundColor: 'white',
    position: 'fixed',
    transform: 'translate(-50%, -50%)',
    top: '40%',
    left: '40%'
  }

  return (
    <form style={backgroundStyling}>
      <div style={formStyling}>
        <p style={{position: '0, 0, 0, 100'}}>X</p>
      <input type='text' placeholder='summary' value={summary} onChange={(e) => setSummary(e.target.value)}></input>
      <input type='text' placeholder='body' value={body} onChange={(e) => setBody(e.target.value)}></input>
      <input type='checkbox' value={recommend} onChange={(e) => setRecommend(e.target.value)}></input>
      <input type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}></input>
      <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
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