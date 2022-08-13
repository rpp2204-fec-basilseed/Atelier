import React from 'react';


function QandA () {

  return (<div className="container">
    <div>QUESTIONS & ANSWERS</div>
    <div className="search-box">
      <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
      <i>placeholder: magnifying glass</i>
    </div>
    <div className="q&a">
      <div className="feeds">
        <div>Q: just for testing. load two questions only</div>
        <div className="helpful">
          <span>Helpful?</span>
          <div>placeholder: Yes(25)</div>
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