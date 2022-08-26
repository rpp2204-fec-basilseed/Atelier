import React, { useState } from 'react';

function Search(props) {

  const [input, setInput] = useState('');

  function handleInput(event) {
    const value = event.target.value;
    setInput(value);
    if (value.length > 2) {
      props.onSearch(event);
    }
  }

  // TODO:
  function search (input) {
    console.log(`you searched for in ${input}`);
  // can get ahold of {props.allQuestions}
  // loop througth every question and every answer
  // every question --- {props.allQuestions.map((ele) => elem.question_body)}
  // every answer --- ???
  }


  // {allQuestions.slice(0, counter * 2 + 2).map((elem) => {
  //   return <Question
  //   key={elem.question_id}
  //   questionBody={elem.question_body}
  //   questionHelpfulness={elem.question_helpfulness}
  //   answers={elem.answers}
  //   questionAdded={questionAdded}
  //   questionBody={elem.question_body}
  //   currentProductName={props.curr_product_name}
  //   />;
  // })}


  return (
    <div className="search-box" style={{opacity: props.questionAdded ? "0.2" : "1", zIndex: "1"}}>
      <input onChange={handleInput} type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS... 🔍"
      value={input}
      style={{ width: "100%", height: "3rem", margin: "15px 0" }}/>
    </div>
  );
}

export default Search;