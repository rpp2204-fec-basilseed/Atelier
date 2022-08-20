import React, { useState, useEffect } from 'react';
const axios = require('axios');
import Header from './Header.jsx';
import Search from './Search.jsx';
import Question from './Question.jsx';
import DisplayMoreQuestions from './DisplayMoreQuestions.jsx';
import AddAQuestion from './AddAQuestion.jsx';

function QandA () {
  const [product_id, setProduct_id] = useState('');

  const [allQuestions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('/testing')
      .then((result) => {
        console.log('log all answers here__', result.data.results[0].answers);
        setQuestions((prev) => {
          return [...prev, ...result.data.results];
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (<div className="container" style={{ margin: "0 20rem", padding: "50px 0", lineHeight: "2"}}>
    <Header />
    <Search />

    {allQuestions.map((elem) => {
      return <Question
      key={elem.question_id}
      questionBody={elem.question_body}
      questionHelpfulness={elem.question_helpfulness}
      answers={elem.answers}
      />;
    })}

    <DisplayMoreQuestions />
    <AddAQuestion />

  </div>);
}

export default QandA;