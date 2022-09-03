import React from 'react';

function Header(props) {
  return <div className="QandA-heading"
    style={{opacity: !props.questionAdded ? "1" : !props.questionSubmitted ? "0.2" : "1"}}>
    QUESTIONS & ANSWERS
  </div>;
}

export default Header;