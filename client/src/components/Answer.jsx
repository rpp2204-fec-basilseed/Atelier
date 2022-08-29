import React, { useState } from 'react';
import { parseJSON } from 'date-fns';
import moment from 'moment';

function Answer(props) {
  const [ answers_votes, setAnswersVotes ] = useState(props.answerHelpfulness);

  function handleAnswerHelpful() {
    setAnswersVotes(answers_votes + 1);
  }

  return (<div style={{opacity: !props.questionAdded ? "1" : !props.questionSubmitted ? "0.2" : "1", zIndex: "1"}}>
    <span style={{ fontWeight: "bold", display: "inline-flex" }}>A: </span>
    <div className="answer-body" style={{ display: "inline-flex", marginLeft: "5px" }}>
      {props.answerBody}
    </div>

    {/* TODO: props.photos */}
    {/* <div className="photos"></div> */}

    <br />
    <div className="answerer" style={{
      color: "#404040", fontSize: "0.8rem", marginLeft: "15px", display: "inline-flex",
      fontWeight: props.answerer === 'Seller' ? "bold" : "none"
      }}>by {props.answerer},
    </div>

    <div className="date" style={{
      color: "#404040", fontSize: "0.8rem", display: "inline-flex", marginLeft: "3px"
      }}> {moment(props.answered_date).format('LL')}
    </div>

    <span className="pipe-symbol" style={{  margin: "0 5px" }}>|</span>
    <span  style={{ color: "#404040", fontSize: "0.8rem", marginLeft: "10px", display: "inline-flex"
      }}>Helpful?
    </span>

    <div onClick={handleAnswerHelpful} style={{
      textDecoration: "underline", color: "#404040", fontSize: "0.8rem", marginLeft: "15px",
      display: "inline-flex" }} >Yes
    </div>

    <div style={{
      margin: "0 3px", color: "#404040", fontSize: "0.8rem", marginLeft: "5px",
      display: "inline-flex" }}>({answers_votes})
    </div>

    <span className="pipe-symbol" style={{  margin: "0 5px" }}>|</span>

    <span style={{
        textDecoration: "underline",
        color: "#404040", fontSize: "0.8rem", marginLeft: "5px", display: "inline-flex"
      }}>Report</span>

  </div>);
}

export default Answer;