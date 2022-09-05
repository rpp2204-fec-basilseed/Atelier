import React, { useState } from 'react';
import axios from 'axios';
import { FaCameraRetro } from 'react-icons/fa';
import { FaOctopusDeploy } from 'react-icons/fa';


function UploadPhotosModal(props) {
  // Working on it!
  // After clicking Upload button, there should pop up a form to allow user choose the photo file(s) to upload
  // display thumbnails for uploaded photos

  return (<div style={{display: props.uploadPhotosButtonClicked ? "block" : "none"}} className="modal-upload-photos">
    <FaCameraRetro style={{marginTop: "100px"}}size={55} />
    <h3>Upload your photos</h3>
    <button>Upload</button>
    <br />
    <span>You may upload up to 5 photos.</span>
    <br />
    <br />
    <br />
    <span>Generated thumbnails</span>
    <br />
    <FaOctopusDeploy size={55}/>
  </div>);
}

export default UploadPhotosModal;