import React, { useState } from 'react';
import AddAnswerModal from './AddAnswerModal.jsx';

function Sidebar(props) {
  const [votes, setVotes] = useState(props.helpful);

  function handleHelpful() {
    setVotes(votes + 1);
  }
  // TODO: validate form input upon submission.
  const [ addAnswerClicked, setAddAnswer ] = useState(false);
  function handleAddAnswer () {
    console.log(`You just clicked Add Answer for question body: ${props.questionBody}`);
    setAddAnswer((prevVal) => {
      return !addAnswerClicked;
    });
  }

  return (<div className="sidebar" style={{ fontSize: "0.7rem", display: "inline-flex",
    opacity: !props.questionAdded ? "1" : !props.questionSubmitted ? "0.2" : "1" }}>
    <span style={{  margin: "0 5px", paddingLeft: "140px" }}>Helpful?</span>
    <div style={{ textDecoration: "underline" }} onClick={handleHelpful}>Yes</div>
    <div style={{  margin: "0 3px" }}>({votes})</div>
    <span className="pipe-symbol" style={{ margin: "0 5px" }}>|</span>

    <div className="add-answer">
      <span onClick={handleAddAnswer} style={{
        paddingLeft: "10px", textDecoration: "underline", textAlign: "right"
      }}>Add Answer</span>
    </div>
    <AddAnswerModal addAnswerButtonClicked={addAnswerClicked}
    currentProductName={props.currentProductName} questionBody={props.questionBody}/>

  </div>);
}

export default Sidebar;