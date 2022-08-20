import React from 'react';
import Sidebar from './Sidebar.jsx';
import Answer from './Answer.jsx';

function Question(props) {

  return (<div>
    <div className="question-body" style={{ fontWeight: "bold", display: "inline-flex" }}>Q: {props.questionBody}</div>
    <Sidebar helpful={props.questionHelpfulness} />
    {Object.values(props.answers).map((elem) => {
      return (
        <Answer
          key={elem.id}
          answerBody={elem.body}
          answerer={elem.answerer_name}
          answered_date={elem.date}
          answerHelpfulness={elem.helpfulness}
          photos={elem.photos}
        />
      )
    })}
    { Object.values(props.answers).length > 2 &&
      <button className="load-more-answers"
      style={{ border: "none", backgroundColor: "white", color: "#671ddf", marginLeft:"9px", fontWeight: "bold", fontSize: "0.7rem" }}
      >LOAD MORE ANSWERS</button>
    }

  </div>);
}

export default Question;
