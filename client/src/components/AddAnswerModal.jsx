import React, { useState } from 'react';
import axios from 'axios';
import UploadPhotosModal from './UploadPhotosModal.jsx';


function AddAnswerModal(props) {

  const [ newAnswerInput, setNewAnswer ] = useState({
    content: '',
    nickname: '',
    email: '',
    photos: [],
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

  const [ uploadPhotos, setUploadPhotos ] = useState(false);

  function handleUploadPhotos () {
    setUploadPhotos((prev) => {
      return !prev;
    });
  }

  const [ allPhotos, setPhotos ] = useState(newAnswerInput.photos);

  function addPhotos(event) {
    const image = event.target.files[0] || null;
    if (image !== null) {
      setPhotos((prev) => {
        return [...prev, image];
      });
    }
    console.log('log event.target.files[0]', event.target.files[0]);
  }

  const [ submitted, setSubmitted ] = useState(false);

  function handleSubmit(event) {
    const { content, nickname, email } = newAnswerInput;
    const photosURL = allPhotos.map((photo) => URL.createObjectURL(photo));
    const data = {
      'body': content,
      'name': nickname,
      'email': email,
      'question_id': props.questionID,
      'photos': photosURL,
    };
    // working on it!
    // 'photos': photosURL,


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
          content: content,
          nickname: nickname,
          email: email,
          photos: photosURL,
        });

        setSubmitted((prevVal) => {
          return !prevVal;
        });
        props.fetchData();
        console.log('successfully fetched data');
      })
      .catch(err => console.log(err));
    }
    console.log('testing submit button!! if you see me, that means i am working.');
  }

  return (<div>
    <div className="modal-add-answer"
      style={{ display: props.addAnswerButtonClicked && !submitted ? "block" : "none" }}

    >

      <h3 className="heading-submit-your-answer">Submit your Answer</h3>
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
      <br />
      <button onClick={handleUploadPhotos} className="upload-photos-button">Upload your photos</button>
      {allPhotos.map((photo, i) => {
        return (<div key={i}>{photo.name}</div>);
      })}

      <div className="modal-actions">
          <button type="button" onClick={handleSubmit} className="submit-answer-button">Submit answer</button>
      </div>
      </div>

      <UploadPhotosModal className="modal-upload-photos" addPhotos={addPhotos}
        addAnswerButtonClicked={props.addAnswerButtonClicked}
        uploadPhotosButtonClicked={uploadPhotos} allPhotos={allPhotos}/>
    </div>
  );
}

export default AddAnswerModal;