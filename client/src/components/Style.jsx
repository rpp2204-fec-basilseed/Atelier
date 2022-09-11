import React from 'react';


function Style(props){

  function handleStyleChange() {
    props.handleStyleChange(props.styleNum);
  }

  return (
    <>
      <img className="style" src={props.thumbURL} height="50" width="50" alt={props.name} onClick={handleStyleChange} />
    </>
  );

}

export default Style;