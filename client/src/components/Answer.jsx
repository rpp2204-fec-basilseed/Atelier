import React, { useState } from 'react';
import { parseJSON } from 'date-fns';
import moment from 'moment';
const axios = require('axios');

function Answer(props) {
  const [ answerHelpfulClicked, setAnswerHelpfulClicked ] = useState(false);
  const [ answersVotes, setAnswersVotes ] = useState(props.answerHelpfulness);

  function handleAnswerHelpful() {
    const data = {
      answer_id: props.answerID,
    };

    axios.put('/answerHelpful', data)
    .then((response) => {
      console.log('PUT request for answer helpfulness, log response.data here', response.data);
      setAnswersVotes((prev) => {
        return answersVotes + 1;
      });
      setAnswerHelpfulClicked(true);
      props.fetchData();
    })
    .catch(err => console.log(err));
  }

  const [ report, setReport ] = useState(false);
  function handleReport() {
    setReport(true);
  }

  return (<div className="answers-feed"
    style={{ opacity: !props.questionAdded ? "1" : !props.questionSubmitted ? "0.2" : "1" }}>
    <span className="answers-feed-A">A: </span>
    <div className="answer-body">{props.answerBody}</div>
    {props.photos.map((photo, i) => {
      return (<div key={i}><br/><img key={i} alt="image" width={"50px"} height={"50px"} src={photo} /></div>);
    })}
    <br />
    <div className="answer-by">by<div className="answerer"
    style={{fontWeight: props.answerer === 'Seller' ? "bold" : "none"}}>{props.answerer},</div>
    </div>

    <div className="answer-date"> {moment(props.answered_date).format('LL')}</div>
    <span className="pipe-symbol">|</span>
    <span className="answer-helpful">Helpful?</span>
    <button disabled={answerHelpfulClicked} className="answer-yes" onClick={handleAnswerHelpful}>Yes</button>
    <div className="answer-votes">({answersVotes})</div>
    <span className="pipe-symbol">|</span>
    { !report && <span onClick={handleReport} className="answer-report">Report</span> }
    { report && <span className="answer-reported">Reported</span>}

  </div>);
}

export default Answer;