import React, { useState } from 'react';

function Search(props) {

  const [input, setInput] = useState('');

  function handleInput(event) {
    const value = event.target.value;
    setInput(value);
  }

  function search(event) {
    props.onSearch(event);
    event.preventDefault();
  }

  return (
    <div className="search-box" style={{opacity: props.questionAdded ? "0.2" : "1", zIndex: "1"}}>
      <input onChange={ () => {handleInput(event); search(event) }} value={input} type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS... 🔍"
      style={{ width: "100%", height: "3rem", margin: "15px 0" }}/>
    </div>
  );
}

export default Search;