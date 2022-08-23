import React, { useState } from 'react';

function Sidebar(props) {
  const [votes, setVotes] = useState(props.helpful);

  function handleHelpful() {
    setVotes(votes + 1);
  }

  // TODO: click on add answer will pop up a form. How to create a pop-up form?
  function addAnswer () {

  }

  return (<div className="sidebar" style={{ fontSize: "0.7rem", display: "inline-flex",
    opacity: props.questionAdded ? "0.2" : "1" }}>
    <span style={{  margin: "0 5px", paddingLeft: "140px" }}>Helpful?</span>
    <div style={{ textDecoration: "underline" }} onClick={handleHelpful}>Yes</div>
    <div style={{  margin: "0 3px" }}>({votes})</div>
    <span className="pipe-symbol" style={{  margin: "0 5px" }}>|</span>

    <div className="add-answer">
      <span style={{
        paddingLeft: "10px", textDecoration: "underline", textAlign: "right"
      }}>Add Answer</span>
    </div>
  </div>);
}

export default Sidebar;