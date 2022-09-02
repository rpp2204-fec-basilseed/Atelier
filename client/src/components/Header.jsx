import React from 'react';

function Header(props) {
  return <div role="heading" style={{opacity: !props.questionAdded ? "1" : !props.questionSubmitted ? "0.2" : "1", zIndex: "1"}}>
    QUESTIONS & ANSWERS
  </div>;
}

export default Header;