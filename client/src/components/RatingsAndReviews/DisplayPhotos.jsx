import React, { useState } from "react";

export default function DisplayPhotos ({photo, toggleDisplayPhoto}) {

  const backgroundStyling = {
    display: "flex",
    position: "fixed",
    top: "0%",
    left: "0%",
    zIndex: "13",
    backgroundColor: "rgba(100,100,100,0.5)",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "overlay"
  };

  return (
    <div style={backgroundStyling} onClick={toggleDisplayPhoto}>
      <img src={photo} onClick={toggleDisplayPhoto}></img>
    </div>
  )
}
