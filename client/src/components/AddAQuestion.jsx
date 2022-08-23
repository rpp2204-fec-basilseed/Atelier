import React, { useState } from 'react';

function AddAQuestion(props) {
  // TODO: once the button is clicked, there will pop up a form for user to fill out.
  // use Modal. MORE TO THINK ABOUT.
  // const [ clicked, setClick ] = useState(false);
  // function addAQuestionButton () {
  //   setClick((prevVal) => !prevVal);
  // }

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
        position: "relative", zIndex: "2", opacity:"1", border: "solid grey", marginTop: "-35rem", width: "80%",
        backgroundColor: "ivory",
        marginLeft: "5rem", padding: "5px 20px"}} >
        <h3 style={{ marginBottom: "0" }}>Ask Your Question</h3>
        <span>About the {props.currentProduct}</span>

        <div className="your-question-content">
            <span>Your Question *</span>
            <input onChange={handleChange} value={inputQuestion.content} name="content" style={{ width: "98%", height: "15rem", margin: "5px 5px" }} type="text"
            placeholder="Why did you like the product or not?"></input>
        </div>
        <div className="your-question-nickname">
          <span>What is your nickname *</span>
          <input onChange={handleChange} value={inputQuestion.nickname} name="nickname" type="text" placeholder="Example: jackson11!"></input>
          <span>For privacy reasons, do not use your full name or email address</span>
        </div>
        <div className="your-question-email">
          <span>Your email *</span>
          <input onChange={handleChange} value={inputQuestion.email} name="email" type="text"></input>
          <span>For authentication reasons, you will not be emailed</span>
        </div>

        <div className="modal-actions">
          <button className="submit-button">Submit question</button>
        </div>

      </div>
    </div>
  );
}

export default AddAQuestion;

