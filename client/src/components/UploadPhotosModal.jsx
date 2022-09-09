import React, { useState } from 'react';
import axios from 'axios';
import { FaCameraRetro } from 'react-icons/fa';
import camoOnesie from '../images/camoOnesie.png';

function UploadPhotosModal(props) {
  const [ uploaded, setUploaded ] = useState(false);
  function handleUploadAllPhotos() {
    setUploaded(true);
  }

return (<div style={{
  display: props.uploadPhotosButtonClicked ? "block" : "none",
  opacity: uploaded ? "0" : "1"
}} className="modal-upload-photos">
  <FaCameraRetro style={{marginTop: "100px"}}size={55} />
  <h3>Upload your photos</h3>

  {props.allPhotos.length > 0 && props.allPhotos.map((photo, i) => {
    return <img key={i} alt={photo.name} width={"50px"} src={URL.createObjectURL(photo)}/>
  })}

  <input
    type="file"
    className="myImage"
    onChange={props.addPhotos}
    disabled={props.allPhotos.length > 4}
  />
  <br />
  {/*Working on it!! onSubmit={doSomething} the upload photos modal will disappear,
  all chosen pics will be rendered to the add answer modal
  and upload your photos button will disappear */}
  <button onClick={handleUploadAllPhotos}>Upload</button>
  <br />
  <span>You may upload up to 5 photos.</span>
  <br />
</div>);
}

export default UploadPhotosModal;