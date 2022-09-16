import React from 'react';
import { FaCheck } from 'react-icons/fa';

function Style(props){

  function handleStyleChange() {
    props.handleStyleChange(props.styleNum);
  }

  if (props.selected === "True") {
    return (
      <>
        <img className="style" src={props.thumbURL} height="50" width="50" alt={props.name} onClick={handleStyleChange} />
        <FaCheck id="checkStyle"/>
      </>
    );
  } else {
    return (
      <>
        <img className="style" src={props.thumbURL} height="50" width="50" alt={props.name} onClick={handleStyleChange} />
      </>
    );
  }

}

export default Style;