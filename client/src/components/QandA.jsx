import React, { useState, useEffect } from 'react';
const axios = require('axios');
import Header from './Header.jsx';
import Search from './Search.jsx';
import Question from './Question.jsx';
import AddAQuestion from './AddAQuestion.jsx';

function QandA (props) {

  const [ allQuestions, setAllQuestions ] = useState([]);

  function fetchData() {
    axios.get('/questions', {
      params: {
        product_id: props.curr_product_id
      }
    }).then((result) => {
        setAllQuestions(() => {
          const questionsSorted =
          [...result.data.results].filter((elem) => Object.keys(elem.answers).length > 0)
          .sort((a, b) => b.question_helpfulness - a.question_helpfulness);
          return questionsSorted;
        });
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleSearch(event) {
    event.preventDefault();
    let searchText = event.target.value;
    if (searchText.length > 2) {
      setAllQuestions(allQuestions.filter((elem) => {
        let answersForEachQ = Object.values(elem.answers);
        return elem.question_body.includes(searchText)
        || answersForEachQ.some((e) => e.body.includes(searchText));
      }));
    } else {
      fetchData();
    }
  }

  const [ counter, setCounter] = useState(0);
  function displayTwoMoreQuestions() {
    setCounter(counter + 1);
  }

  const [ questionAdded, setQuestionAdded ] = useState(false);
  function handleAddAQuestionButton () {
    setQuestionAdded((prevVal) => {
      return !prevVal;
    });
  }

  const [ questionSubmitted, setQuestionSubmitted ] = useState(false);
  function handleQuestionSubmitted () {
    setQuestionSubmitted(false);
  }

  return (<div className="QandA-container">
    <Header questionAdded={questionAdded} questionSubmitted={questionSubmitted}/>
    <Search onSearch={handleSearch} questionAdded={questionAdded}
    questionSubmitted={questionSubmitted}/>

    { allQuestions.slice(0, counter * 2 + 2).map((elem)=> {
      return <Question
      fetchData={fetchData}
      key={elem.question_id}
      questionID={elem.question_id}
      questionBody={elem.question_body}
      questionHelpfulness={elem.question_helpfulness}
      questionReported={elem.reported}
      answers={elem.answers}
      questionAdded={questionAdded}
      questionBody={elem.question_body}
      currentProductName={props.curr_product_name}
      questionSubmitted={questionSubmitted}
      />;
    })}

    { allQuestions.length > 2 && (counter * 2 + 2 < allQuestions.length) &&
    <button className="button-more-answered-questions" onClick={displayTwoMoreQuestions} style={{
      opacity: !questionAdded ? "1" : !questionSubmitted ? "0.2" : "1",
      }}>MORE ANSWERED QUESTIONS
    </button>}

    <AddAQuestion fetchData={fetchData} currentProductName={props.curr_product_name} currentProductID={props.curr_product_id}
      questionAdded={questionAdded} questionSubmitted={questionSubmitted}
      addAQuestion={handleAddAQuestionButton} handleQuestionSubmitted={handleQuestionSubmitted}/>

  </div>);
}

export default QandA;