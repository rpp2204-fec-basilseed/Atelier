import React from 'react';


function Style(props){

  function handleStyleChange() {
    props.handleStyleChange(props.styleNum);
  }

  return (
    <>
      <img className="style" src={props.thumbURL} alt={props.name} onClick={handleStyleChange} />
    </>
  );

}

export default Style;