import React, { useState, useEffect } from 'react';
const Axios = require ('axios');


export default function AddReview ({ productId }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(true);

  return (
    <form style={{margin: '20px'}}>
      <input type='text' placeholder='productId' value={summary}></input>
      <input type='text' placeholder='body' value={body}></input>
      <p>Recommend? </p>
      <input type='checkbox' value={recommend}></input>
      <input type='text' placeholder='Enter your name' value={name}></input>
      <input type='email' placeholder='Enter your email' value={email}></input>
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

*/