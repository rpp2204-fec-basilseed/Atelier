import React, { useState } from 'react';

function AddAnswerModal(props) {
  const [ submitted, setSubmitted ] = useState(false);
  function handleSubmit() {
    setSubmitted((prevVal) => {
      return !prevVal;
    });
  }

  return (
    <div style={{display:
      props.addAnswerButtonClicked && !submitted ? "block" : "none",
      fontSize: "1rem",
      position: "fixed", zIndex: "2", opacity:"1", border: "solid grey",
      top: "50%", left: "60%", transform: "translate(-50%, -50%)", width: "40%",
      float: "left",
      backgroundColor: "ivory",
      marginLeft: "-10rem", padding: "5px 20px"}}>

      <h3 style={{ marginBottom: "0" }}>Submit your Answer</h3>
      <span>{props.currentProductName}: {props.questionBody}</span>
      <span>Your Answer *</span>
      <input name="content"
      style={{ width: "98%", height: "15rem", margin: "5px 5px" }} type="text"></input>
      <span>What is your nickname *</span>
      <input name="nickname"
      type="text" placeholder="Example: jack543!"></input>
      <br />
      <span>For privacy reasons, do not use your full name or email address</span>
      <br />
      <span>Your email *</span>
      <input name="email" type="text" placeholder="Example: jack@email.com"></input>
      <br />
      <span>For authentication reasons, you will not be emailed</span>

      <button className="upload-photos-button">Upload your photos</button>

      <div className="modal-actions">
          <button onClick={handleSubmit} className="submit-answer-button">Submit answer</button>
      </div>

    </div>
  );
}

export default AddAnswerModal;