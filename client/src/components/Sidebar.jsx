import React, { useState } from 'react';
import AddAnswerModal from './AddAnswerModal.jsx';

function Sidebar(props) {
  const [votes, setVotes] = useState(props.helpful);

  function handleHelpful() {
    setVotes(votes + 1);
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
    <div className="sidebar-yes" onClick={handleHelpful}>Yes</div>
    <div className="sidebar-votes">({votes})</div>
    <span className="pipe-symbol">|</span>

    <span className="add-answer" onClick={handleAddAnswer}>Add Answer</span>

    <AddAnswerModal fetchData={props.fetchData} addAnswerButtonClicked={addAnswerClicked}
    currentProductName={props.currentProductName} questionBody={props.questionBody} questionID={props.questionID}/>

  </div>);
}

export default Sidebar;