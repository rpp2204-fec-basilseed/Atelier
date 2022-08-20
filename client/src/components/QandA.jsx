import React, { useState, useEffect } from 'react';
const axios = require('axios');
import Header from './Header.jsx';
import Search from './Search.jsx';
import Question from './Question.jsx';
import AddAQuestion from './AddAQuestion.jsx';

function QandA (props) {

  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
    axios.get('/testing', {
      params: {
        product_id: props.curr_product_id
      }
    }).then((result) => {
        console.log('log all answers here__', result.data.results[0].answers);
        setAllQuestions((prev) => {
          const questionsSorted = [...prev, ...result.data.results].sort((a, b) => b.question_helpfulness - a.question_helpfulness);
          return questionsSorted;
        });
      })
      .catch((err) => console.log(err))
  }, []);

  const firstTwoQuestions = allQuestions.slice(0, 2);

  const [ counter, setCounter] = useState(0);

  function displayTwoMoreQuestions() {
    setCounter(counter + 1);
    setAllQuestions(allQuestions.slice(0, 4));
  }

  return (<div className="container" style={{ margin: "0 20rem", padding: "50px 0", lineHeight: "2"}}>
    <Header />
    <Search />

    {counter < 1 && firstTwoQuestions.map((elem) => {
      return <Question
      key={elem.question_id}
      questionBody={elem.question_body}
      questionHelpfulness={elem.question_helpfulness}
      answers={elem.answers}
      />;
    })}

    {counter === 1 && allQuestions.map((elem) => {
      return <Question
      key={elem.question_id}
      questionBody={elem.question_body}
      questionHelpfulness={elem.question_helpfulness}
      answers={elem.answers}
      />;
    })}

    { allQuestions.length > 2 &&
    <button onClick={displayTwoMoreQuestions} style={{
      display: "inline-block",
      lineHeight: "3.5",
      fontWeight: "bold",
      height: "3rem",
      backgroundColor: "white",
      marginTop: "20px",
      marginRight: "10px",
      border: "1px solid grey"
      }}>MORE ANSWERED QUESTIONS {counter}
    </button>}

    <AddAQuestion />

  </div>);
}

export default QandA;