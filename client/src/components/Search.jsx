import React, { useState } from 'react';

function Search() {
  // user types in the search box
  // once there are three characters typed, it will trigger the search function
  const [input, setInput] = useState('');

  function handleInput(event) {
    const value = event.target.value;
    setInput(value);
    if (value.length > 2) {
      search(value);
    }
  }

  // TODO: use database??
  function search (input) {
    console.log(`you searched for in ${input}`);
  }

  return (
    <div className="search-box">
      <input onChange={handleInput} type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS... 🔍"
      value={input}
      style={{ width: "100%", height: "3rem", margin: "15px 0" }}/>
    </div>
  );
}

export default Search;