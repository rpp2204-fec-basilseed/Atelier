import React from 'react';

function DisplayMoreQuestions() {
  // TODO: need to inherit product_id and results array of all the questions of that certain product,
  // so that once this button is clicked
  // it will display two more questions for that product.
  function displayTwoMoreQuestions () {

  }

  return (
    <button onClick={ displayTwoMoreQuestions } style={{
      display: "inline-block",
      lineHeight: "3.5",
      fontWeight: "bold",
      height: "3rem",
      backgroundColor: "white",
      marginTop: "20px",
      marginRight: "10px",
      border: "1px solid grey"
      }}>MORE ANSWERED QUESTIONS
    </button>
  );
}

export default DisplayMoreQuestions;