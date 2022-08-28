import React, { useState } from 'react';
import axios from 'axios';

function AddAQuestion(props) {

  const [ inputQuestion, setInputQuestion ] = useState({
    content: '',
    nickname: '',
    email: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputQuestion((prevVal) => {
      return {
        ...prevVal,
        [name] : value,
      };
    });
  }

  // function handleSubmit(event){
  //   axios.post('/questions', );
  // }
  // once the user clicks submit, it will check the input for validation.
    // If input is invalid, send a warning message and prevent submitting.
    // If input is valid, form will be submitted and posted, the Modal window will disappear
       // and Modal container's opacity will go back to "1".

  return (<div className="modal-add-a-question">
      <button className="toggle-button" id="add-a-question-toggle-button" onClick={props.addAQuestion} style={{
        lineHeight: "3.5",
        fontWeight: "bold",
        height: "3rem",
        backgroundColor: "white",
        marginTop: "20px",
        border: "1px solid grey",
        opacity: props.questionAdded ? "0.2" : "1"
        }}>ADD A QUESTION +
      </button>

      <div className="modal" id="modal" style={{
        display: props.questionAdded ? "block" : "none",
        position: "fixed", zIndex: "2", opacity:"1", border: "solid grey",
        top: "50%",left: "50%",transform: "translate(-50%, -50%)", float: "left", width: "40%",
        backgroundColor: "ivory",
        marginLeft: "5rem", padding: "5px 20px"}} >
        <h3 style={{ marginBottom: "0" }}>Ask Your Question</h3>
        <span>About the {props.currentProductName}</span>
        <br />
        <span>Your Question *</span>
        <input onChange={handleChange} value={inputQuestion.content} name="content" style={{ width: "98%", height: "15rem", margin: "5px 5px" }} type="text"
        placeholder="Why did you like the product or not?"></input>
        <span>What is your nickname *</span>
        <input onChange={handleChange} value={inputQuestion.nickname} name="nickname" type="text" placeholder="Example: jackson11!"></input>
        <br />
        <span>For privacy reasons, do not use your full name or email address</span>
        <br />
        <span>Your email *</span>
        <input onChange={handleChange} value={inputQuestion.email} name="email" type="text"></input>
        <br />
        <span>For authentication reasons, you will not be emailed</span>
        <br />
        <button onClick={(event) => {
          props.submitQuestion(inputQuestion);
          event.preventDefault();
        }} className="submit-button">Submit question</button>
      </div>
    </div>
  );
}

export default AddAQuestion;

