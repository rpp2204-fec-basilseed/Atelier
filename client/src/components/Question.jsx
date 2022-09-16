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

  return (<div className="feed-container">
    <div className="question-body"
    style={{ opacity: !props.questionAdded ? "1" : !props.questionSubmitted ? "0.2" : "1" }}>
    Q: {props.questionBody}</div>
    <Sidebar fetchData={props.fetchData} questionSubmitted={props.questionSubmitted}
    questionAdded={props.questionAdded} helpful={props.questionHelpfulness} reported={props.questionReported}
    questionBody={props.questionBody} currentProductName={props.currentProductName} questionID={props.questionID}/>

    { !clicked && shortAnswers.map((elem) => {
      return (
        <Answer
          fetchData={props.fetchData}
          questionSubmitted={props.questionSubmitted}
          questionAdded={props.questionAdded}
          key={elem.id}
          answerID={elem.id}
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
          fetchData={props.fetchData}
          questionSubmitted={props.questionSubmitted}
          questionAdded={props.questionAdded}
          key={elem.id}
          answerID={elem.id}
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
      style={{ opacity: !props.questionAdded ? "1" : !props.questionSubmitted ? "0.2" : "1" }}
      >{ clicked? "COLLAPSE ANSWERS" : "SEE MORE ANSWERS" }</button>
    }
  </div>);
}

export default Question;
