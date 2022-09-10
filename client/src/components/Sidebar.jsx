import React, { useState } from 'react';
import AddAnswerModal from './AddAnswerModal.jsx';
const axios = require('axios');

function Sidebar(props) {
  const [ questionHelpfulClicked, setQuestionHelpfulClicked ] = useState(false);
  const [questionVotes, setQuestionVotes] = useState(props.helpful);

  function handleQuestionHelpful() {
    const data = {
      question_id: props.questionID,
    };

    axios.put('/questionHelpful', data)
    .then((response) => {
      console.log('PUT request for question helpfulness, log response.data here', response.data);
      setQuestionVotes((prev) => {
        return questionVotes + 1
      });
      console.log('log current helpfulness here', questionVotes);
      setQuestionHelpfulClicked(true);
    })
    .catch(err => console.log(err));
  }

  const [ questionReport, setQuestionReport ] = useState(props.reported);

  function handleQuestionReport() {
    const data = {
      question_id: props.questionID,
    };

    axios.put('/reportQuestion', data)
      .then((response) => {
        console.log('PUT request for report a question, log response.data here', response.data);
        setQuestionReport((prev) => {
          return !questionReport;
        });
        props.fetchData();
      })
      .catch(err => console.log(err));
  }

  const [ addAnswerClicked, setAddAnswer ] = useState(false);

  function handleAddAnswer () {
    console.log(`You just clicked Add Answer for question body: ${props.questionBody}`);
    setAddAnswer((prevVal) => {
      return !addAnswerClicked;
    });
  }

  return (<div className="sidebar"
    style={{ opacity: !props.questionAdded ? "1" : !props.questionSubmitted ? "0.2" : "1" }}>
    <span className="sidebar-helpful">Helpful?</span>
    <button disabled={questionHelpfulClicked} className="sidebar-yes" onClick={handleQuestionHelpful}>Yes</button>
    <div className="sidebar-votes">({questionVotes})</div>
    <span className="pipe-symbol">|</span>
    <span onClick={handleQuestionReport} className="question-report">Report</span>
    <span className="pipe-symbol">|</span>

    <span className="add-answer" onClick={handleAddAnswer}>Add Answer</span>

    <AddAnswerModal fetchData={props.fetchData} addAnswerButtonClicked={addAnswerClicked}
    currentProductName={props.currentProductName} questionBody={props.questionBody} questionID={props.questionID}/>

  </div>);
}

export default Sidebar;