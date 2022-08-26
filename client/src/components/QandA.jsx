import React, { useState, useEffect } from 'react';
const axios = require('axios');
import Header from './Header.jsx';
import Search from './Search.jsx';
import Question from './Question.jsx';
import AddAQuestion from './AddAQuestion.jsx';

function QandA (props) {

  const [allQuestions, setAllQuestions] = useState([]);

  function update() {
    axios.get('/questions', {
      params: {
        product_id: props.curr_product_id
      }
    }).then((result) => {
        console.log('log all answers here__', result.data.results[0].answers);
        setAllQuestions((prev) => {
          const questionsSorted =
          [...prev, ...result.data.results].filter((elem) => Object.keys(elem.answers).length !== 0)
          .sort((a, b) => b.question_helpfulness - a.question_helpfulness);
          return questionsSorted;
        });
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    update();
  }, []);

  // Working on it: search function. Maybe combine search function with update?
  // delete the search input will make the page back to default page and erase the original searched result
  // || includes, include everything
  function handleSearch(event) {
    let searchText = event.target.value;
    axios.get('/questions', {
      params: {
        product_id: props.curr_product_id
      }
    })
    .then((result) => {
      setAllQuestions((prev) => {
        const searchedResults =
        [...prev, ...result.data.results].filter((elem) => elem.question_body.includes(searchText));
        return searchedResults;
      });
      console.log('log searchedResults here', searchedResults);
      })
      .catch((err) => console.log(err));
  }

  const [ counter, setCounter] = useState(0);

  function displayTwoMoreQuestions() {
    setCounter(counter + 1);
  }

  const [ questionAdded, setQuestionAdded ] = useState(false);

  function handleAddAQuestionButton () {
    setQuestionAdded((prevVal) => {
      return !prevVal
    });
  }

  return (<div className="container" style={{
    margin: "0 20rem", padding: "50px 0", lineHeight: "2"}}>
    <Header questionAdded={questionAdded}/>
    <Search onSearch={handleSearch} allQuestions={allQuestions} questionAdded={questionAdded}/>


    {/* allQuestions.slice(0, counter * 2 + 2).map((elem) */}
    { allQuestions.map((elem)=> {
      return <Question
      key={elem.question_id}
      questionBody={elem.question_body}
      questionHelpfulness={elem.question_helpfulness}
      answers={elem.answers}
      questionAdded={questionAdded}
      questionBody={elem.question_body}
      currentProductName={props.curr_product_name}
      />;
    })}

    { allQuestions.length > 2 && (counter * 2 + 2 < allQuestions.length) &&
    <button onClick={displayTwoMoreQuestions} style={{
      lineHeight: "3.5",
      fontWeight: "bold",
      height: "3rem",
      backgroundColor: "white",
      marginTop: "20px",
      marginRight: "10px",
      border: "1px solid grey",
      display: "inline-flex",
      opacity: questionAdded ? "0.2" : "1",
      zIndex: "1"
      }}>MORE ANSWERED QUESTIONS
    </button>}

    <AddAQuestion currentProductName={props.curr_product_name} questionAdded={questionAdded} addAQuestion={handleAddAQuestionButton}/>

  </div>);
}

export default QandA;