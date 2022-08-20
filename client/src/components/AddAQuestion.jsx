import React from 'react';

function AddAQuestion() {
  // TODO: once the button is clicked, there will pop up a form for user to fill out.
  // MORE TO THINK ABOUT. How to create a pop-up form??
  function addAQuestion () {

  }

  return (
    <button onClick={addAQuestion} style={{
      lineHeight: "3.5",
      fontWeight: "bold",
      height: "3rem",
      backgroundColor: "white",
      marginTop: "20px",
      border: "1px solid grey"}}>ADD A QUESTION +
    </button>
  );
}

export default AddAQuestion;

