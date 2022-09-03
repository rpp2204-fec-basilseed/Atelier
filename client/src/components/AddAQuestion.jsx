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

  function submitQuestion(event){
  const { content, nickname, email } = event;
  const data = {
    'body': content,
    'name': nickname,
    'email': email,
    'product_id': props.currentProductID,
  };

  let config = {
    headers: {
      contentType: 'application/json'
    }
  };
  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(content.length === 0 || nickname.length === 0 || email.length === 0 || !email.match(validRegex)) {
    alert(`You must enter the following:`);
  } else {
    axios.post('/addQuestion', data, config)
    .then((response) => {
      console.log(response);
      setInputQuestion({
        content: '',
        nickname: '',
        email: ''
      });
      props.handleQuestionSubmitted();
      props.addAQuestion();
    })
    .catch(err => console.log(err));
  }
}

  return (<div>
      <button className="button-add-a-question" onClick={props.addAQuestion}
        style={{ opacity: !props.questionAdded ? "1" : !props.questionSubmitted ? "0.2" : "1" }}>
        ADD A QUESTION +
      </button>

      <div className="modal-add-a-question" style={{
        display: !props.questionAdded ? "none" : !props.questionSubmitted ? "block" : "none" }} >
        <h3 className="modal-ask-your-question-field">Ask Your Question</h3>
        <span>About the {props.currentProductName}</span>
        <br />
        <span>Your Question *</span>
        <input onChange={handleChange} className="modal-question-input" value={inputQuestion.content}
        name="content" type="text"
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
          submitQuestion(inputQuestion);
          event.preventDefault();
        }} className="submit-button">Submit question</button>
      </div>
    </div>
  );
}

export default AddAQuestion;

