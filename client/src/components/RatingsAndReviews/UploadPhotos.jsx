import React, { useState } from "react";
const axios = require("axios");
const FormData = require("form-data");
import { FaCheck } from "react-icons/fa";

export default function UploadPhotos({ photos }) {
  const [successful, setSuccessful] = useState(false);

  var file;

  const uploadFile = (image) => {
    var data = new FormData();

    data.append("file", image);
    data.append("upload_preset", "ml_default");

    var config = {
      method: "post",
      url: "https://api.cloudinary.com/v1_1/dob8np3df/image/upload",
      headers: {},
      data: data,
    };

    axios(config)
      .then((res) => {
        photos.push(res.data.secure_url);
        if (res.status === 200) {
          setSuccessful(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="ratings-upload-button"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <input
        type="file"
        name="photo"
        style={{ paddingRight: "0px", width: "200px" }}
        onChange={(e) => (file = e.target.files[0])}
      ></input>
      <p
        style={{ fontSize: "12px", border: "solid black 2px", padding: "2px" }}
        onClick={() => uploadFile(file)}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "lightgray")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
      >
        Upload Photo
      </p>
      {successful ? (
        <FaCheck
          style={{ backgroundColor: "green", size: "10px", marginLeft: "10px" }}
        />
      ) : null}
    </div>
  );
}
