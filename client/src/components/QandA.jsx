//require('dotenv').config();
import React, { useState } from 'react';
const axios = require('axios');

function QandA () {
  // function componentDidMount() {
  //   let config = { 'Authorization' : process.env.REACT_APP_API_KEY };
  //   // Working on it! just testing with /products.
  //   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products', { headers: config })
  //     then((result) => console.log(result));
  //   // console.log('this is your api key', process.env.REACT_API_KEY);
  // }
  const [votes, setVotes] = useState(0);
  function handleHelpful() {
    setVotes(votes + 1);
  }

  return (<div className="container">
    <div>QUESTIONS & ANSWERS</div>
    <div className="search-box">
      <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS... 🔍" style={{width: "370px"}}/>
    </div>
    <div className="q&a">
      <div className="feeds">
        <div>Q: just for testing. load two questions only</div>
        <div className="helpful">
          <span>Helpful?</span>
          <div>placeholder:
            <div onClick={handleHelpful}>Yes</div>
            <div>({votes})</div>
          </div>
        </div>
        <div className="add-answer">
          <div>placeholder: add answer</div>
        </div>
        <br></br>
        <div>A: sample answer. Load two answers at most at a time.</div>
      </div>
      <a href="true">LOAD MORE ANSWERS</a>
    </div>
    <div className="button-more-answered-questions">
      <button>MORE ANSWERED QUESTIONS</button>
    </div>
    <div className="button-add-a-question">
      <button>ADD A QUESTION</button>
    </div>
  </div>);
}

export default QandA;