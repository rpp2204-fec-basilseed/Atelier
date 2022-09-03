import React, { useState } from 'react';
import { parseJSON } from 'date-fns';
import moment from 'moment';

function Answer(props) {
  const [ answers_votes, setAnswersVotes ] = useState(props.answerHelpfulness);

  function handleAnswerHelpful() {
    setAnswersVotes(answers_votes + 1);
  }

  return (<div className="answers-feed"
    style={{ opacity: !props.questionAdded ? "1" : !props.questionSubmitted ? "0.2" : "1" }}>
    <span className="answers-feed-A">A: </span>
    <div className="answer-body">{props.answerBody}</div>

    {/* TODO: props.photos */}
    {/* <div className="photos"></div> */}

    <br />
    <div className="answerer" style={{fontWeight: props.answerer === 'Seller' ? "bold" : "none"}}>
      by {props.answerer},
    </div>

    <div className="answer-date"> {moment(props.answered_date).format('LL')}</div>
    <span className="pipe-symbol">|</span>
    <span className="answer-helpful">Helpful?</span>
    <div className="answer-yes" onClick={handleAnswerHelpful}>Yes</div>
    <div className="answer-votes">({answers_votes})</div>
    <span className="pipe-symbol">|</span>
    <span className="answer-report">Report</span>

  </div>);
}

export default Answer;