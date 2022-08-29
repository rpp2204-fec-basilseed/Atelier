import React, { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import Answer from './Answer.jsx';

function Question(props) {
  const answersData = Object.values(props.answers);
  const sellerAnswer = answersData.filter(elem => elem.answerer_name === 'Seller');

  const nonSellerAnswers =
    answersData.filter(elem => elem.answerer_name !== 'Seller')
    .sort((a, b) => b.helpfulness - a.helpfulness);

  const answersModified = [...sellerAnswer, ...nonSellerAnswers];
  const shortAnswers = answersModified.slice(0, 2);

  const [ clicked, setClicked ] = useState(false);

  function toggleAnswers() {
    setClicked((prevVal) => {
      return !prevVal;
    });
  }

  return (<div>
    <div className="question-body" style={{ fontWeight: "bold", display: "inline-flex",
    opacity: !props.questionAdded ? "1" : !props.questionSubmitted ? "0.2" : "1", zIndex: "1" }}>Q: {props.questionBody}</div>
    <Sidebar questionSubmitted={props.questionSubmitted} questionAdded={props.questionAdded} helpful={props.questionHelpfulness}
    questionBody={props.questionBody} currentProductName={props.currentProductName}/>

    { !clicked && shortAnswers.map((elem) => {
      return (
        <Answer
          questionSubmitted={props.questionSubmitted}
          questionAdded={props.questionAdded}
          key={elem.id}
          answerBody={elem.body}
          answerer={elem.answerer_name}
          answered_date={elem.date}
          answerHelpfulness={elem.helpfulness}
          photos={elem.photos}
        />
      )
    })}

    { clicked && answersModified.map((elem) => {
      return (
        <Answer
          questionSubmitted={props.questionSubmitted}
          questionAdded={props.questionAdded}
          key={elem.id}
          answerBody={elem.body}
          answerer={elem.answerer_name}
          answered_date={elem.date}
          answerHelpfulness={elem.helpfulness}
          photos={elem.photos}
        />
      )
    })}

    { answersModified.length > 2 &&
      <button onClick={ toggleAnswers } className="see-more-answers"
      style={{ opacity: !props.questionAdded ? "1" : !props.questionSubmitted ? "0.2" : "1",
      zIndex: "1", border: "none", backgroundColor: "white", color: "#671ddf", marginLeft:"9px",
      fontWeight: "bold", fontSize: "0.7rem" }}
      >{ clicked? "COLLAPSE ANSWERS" : "SEE MORE ANSWERS" }</button>
    }

  </div>);
}

export default Question;
