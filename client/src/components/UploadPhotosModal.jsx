import React, { useState } from 'react';
import axios from 'axios';
import { FaCameraRetro } from 'react-icons/fa';
import camoOnesie from '../images/camoOnesie.png';
import MultipleImageUploadComponent from './MultipleImageUploadComponent.jsx';

function UploadPhotosModal(props) {
  // Working on it!
  // After clicking Upload button, there should pop up a form to allow user choose the photo file(s) to upload
  // display thumbnails for uploaded photos

  // props.photos
  const [ selectedPhoto, setSelectedPhoto ] = useState(null);
  // function addPhotos
  // function removePhotos

  return (<div style={{display: props.uploadPhotosButtonClicked ? "block" : "none"}} className="modal-upload-photos">
    <FaCameraRetro style={{marginTop: "100px"}}size={55} />
    <h3>Upload your photos</h3>

    {selectedPhoto && (
        <div>
        <img alt="not found" width={"50px"} src={URL.createObjectURL(selectedPhoto)} />
        <br />
        {/* Work on it later: click event will invoke removePhotos function(.filter())
        <button onClick={()=>setUploadedPhotos(null)}>Remove</button> */}
        </div>
    )}

    <input
      type="file"
      className="myImage"
      // work on it later: change event will invoke addPhotos function(.push())
      onChange={(event) => {
        console.log('log e.target.files here', event.target.files);

        console.log(event.target.files[0]);
        setSelectedPhoto(event.target.files[0]);
      }}
    />

    <button>Upload</button>
    <br />
    <span>You may upload up to 5 photos.</span>
    <span>Generated thumbnails</span>
    <br />
    <img src={camoOnesie} alt="camo-onesie" className="camo-onesie"/>

    <div>TESTING BELOW</div>
    <MultipleImageUploadComponent />
  </div>);
}

export default UploadPhotosModal;