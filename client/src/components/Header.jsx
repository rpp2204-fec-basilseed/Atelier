import React from 'react';

function Header(props) {
  return <div style={{opacity: props.questionAdded ? "0.2" : "1", zIndex: "1"}}>QUESTIONS & ANSWERS</div>;
}

export default Header;