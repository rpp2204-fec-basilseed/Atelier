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
    <div>
      <input className="QandA-search-box" onChange={ () => {handleInput(event); search(event) }}
      value={input} type="text"
      placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS... 🔍"
      style={{ opacity: !props.questionAdded ? "1" : !props.questionSubmitted ? "0.2" : "1" }}/>
    </div>
  );
}

export default Search;