import React, { useState } from 'react';
import axios from 'axios';

function AddAnswerModal(props) {

  const [ newAnswerInput, setNewAnswer ] = useState({
    content: '',
    nickname: '',
    email: '',
    // TODO later - photos: [],
    // photos: [],
  });

  function handleNewAnswer(event) {
    const { name, value } = event.target;
    setNewAnswer((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  }

  const [ submitted, setSubmitted ] = useState(false);

  function handleSubmit(event) {
    const { content, nickname, email } = event;
    const data = {
      'body': content,
      'name': nickname,
      'email': email,
      'question_id': props.questionID,
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
      axios.post('/addAnswer', data, config)
      .then((response) => {
        console.log(response);
        setNewAnswer({
          content: '',
          nickname: '',
          email: ''
        });
        setSubmitted((prevVal) => {
          return !prevVal;
        });
        props.fetchData();
        console.log('successfully fetched data');
      })
      .catch(err => console.log(err));
    }
  }

  // TODO: Up to five photos should be allowed for each answer.
  // Clicking the button should open a separate window where the photo to be can be selected.
  // After the first image is uploaded, a thumbnail showing the image should appear.
  // A user should be able to add up to five images before the button to add disappears,
  // preventing further additions.

  return (
    <div className="modal-add-answer"
    style={{ display: props.addAnswerButtonClicked && !submitted ? "block" : "none" }}>

      <h3 style={{ marginBottom: "0" }}>Submit your Answer</h3>
      <span>{props.currentProductName}: {props.questionBody}</span>
      <br />
      <span>Your Answer *</span>
      <input className="modal-answer-input" onChange={handleNewAnswer} value={newAnswerInput.content}
       name="content" type="text"></input>
      <span>What is your nickname *</span>
      <input onChange={handleNewAnswer} value={newAnswerInput.nickname} name="nickname"
      type="text" placeholder="Example: jack543!"></input>
      <br />
      <span>For privacy reasons, do not use your full name or email address</span>
      <br />
      <span>Your email *</span>
      <input onChange={handleNewAnswer} value={newAnswerInput.email} name="email" type="text"
      placeholder="Example: jack@email.com"></input>
      <br />
      <span>For authentication reasons, you will not be emailed</span>

      <button className="upload-photos-button">Upload your photos</button>

      <div className="modal-actions">
          <button type="button" onClick={(event) => {
            handleSubmit(newAnswerInput);
            event.preventDefault();
          }} className="submit-answer-button">Submit answer</button>
      </div>
    </div>
  );
}

export default AddAnswerModal;