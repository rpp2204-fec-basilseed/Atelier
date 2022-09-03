import '@testing-library/jest-dom';
import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {jest} from '@jest/globals';
import QandA from '../QandA.jsx';
import Header from '../Header.jsx';
import Search from '../Search.jsx';
import Answer from '../Answer.jsx';
import Sidebar from '../Sidebar.jsx';
import AddAQuestion from '../AddAQuestion.jsx';
import AddAnswerModal from '../AddAnswerModal.jsx';
import Question from '../Question.jsx';


afterEach(cleanup);

// <Header /> -- need to test when props.questionAdded is true and when it's false
test("Header has correct QUESTIONS & ANSWERS text", () => {
  render(<Header />);
  const componentText = screen.queryByText(/QUESTIONS & ANSWERS/i);
  expect(componentText).toBeInTheDocument();
});

// <Search />
test("Search bar has a placeholder message", () => {
  render(<Search />);
  const placeholderText = screen.queryByPlaceholderText(/HAVE A QUESTION?/);
  expect(placeholderText).toBeInTheDocument();
});

// test("User types into an input field and should be reflected", async () => {
//   render(<Search />);
//   const input = screen.getByRole("textbox", {
//     input: '',
//   });
//   await userEvent.type(input, "testing search bar");
//   expect(input).toHaveValue("testing search bar");
// });

// test("search function is called", () => {
//   const search = jest.fn();
//   handleSearch.mockImplementation((event) => {return search(event)});
//   render(<Search />);
//   userEvent.type(screen.getByRole("textbook"));
//   expect(search).toHaveBeenCalled();
// });


// <Answer /> -- more to cover
test("Each answer has a helpful section", ()=> {
  render(<Answer />);
  const componentText = screen.queryByText(/Helpful/i);
  expect(componentText).toBeInTheDocument();
});

test("Sidebar has an Add Answer section", ()=> {
  render(<Sidebar />);
  const componentText = screen.queryByText(/Add Answer/i);
  expect(componentText).toBeInTheDocument();
});

test("clicks Add Answer invokes handleAddAnswer function", async () => {
  const handleAddAnswer = jest.fn();

  const { getByText, getByTestId } = render(<Sidebar onClick={handleAddAnswer()}/>);
  fireEvent.click(await getByText("Add Answer"));
  expect(handleAddAnswer).toHaveBeenCalled();
});

test("clicks Yes invokes handleHelpful function", async () => {
  const handleHelpful = jest.fn();

  const { getByText, getByTestId } = render(<Sidebar onClick={handleHelpful()}/>);
  fireEvent.click(await getByText("Yes"));
  expect(handleHelpful).toHaveBeenCalled();
});

// <Question />
// test("once clicked see more answers button, COLLAPSE ANSWERS should show up", async () => {
//   const user = userEvent.setup();
//   render(<Question />);

//   const button = screen.getByRole("button");
//   await user.click(button);
//   const componentText = screen.queryByText("COLLAPSE ANSWERS");
//   // old text SEE MORE ANSWERS
//   expect(componentText).toBeInTheDocument();
// });

// test("display see more answers by default", async () => {
//   render(<Question />);
//   const componentText = screen.queryByText("SEE MORE ANSWERS");
//   expect(componentText).toBeInTheDocument();
// });

// test("click SEE MORE ANSWERS button invokes toggleAnswers function", async () => {
//   const toggleAnswers = jest.fn();
//   const { getByText, getByTestId } = render(<Question onClick={toggleAnswers()}/>);
//   fireEvent.click(await getByText("SEE MORE ANSWERS"));
//   expect(toggleAnswers).toHaveBeenCalled();
// });

// <AddAQuestion /> - figure out tests for functions
test("always has an ADD A QUESTION button", ()=> {
  render(<AddAQuestion />);
  const componentText = screen.queryByText(/ADD A QUESTION/i);
  expect(componentText).toBeInTheDocument();
});

test('displays an alert message with invalid input for add a question', async () => {
  const alertMock = jest.spyOn(window,'alert').mockImplementation();
  const { getByText, getByTestId } = render(<AddAQuestion />);
  fireEvent.click(await getByText('Submit question'));
  expect(alertMock).toHaveBeenCalled();
});

test("submit question button invokes submitQuestion function", async () => {
  const submitQuestion = jest.fn();
  const { getByText, getByTestId } = render(<AddAQuestion onSubmit={submitQuestion()}/>);
  fireEvent.click(await getByText("Submit question"));
  expect(submitQuestion).toHaveBeenCalled();
});

// <AddAnswerModal />
test('displays an alert message with invalid input for add an answer', async () => {
  const alertMock = jest.spyOn(window,'alert').mockImplementation();
  const { getByText, getByTestId } = render(<AddAnswerModal />);
  fireEvent.click(await getByText('Submit answer'));
  expect(alertMock).toHaveBeenCalled();
});


test("submit button invokes handleSubmit function", async () => {
  const handleSubmit = jest.fn();

  const { getByText, getByTestId } = render(<AddAnswerModal onSubmit={handleSubmit()}/>);
  fireEvent.click(await getByText("Submit answer"));
  expect(handleSubmit).toHaveBeenCalled();
});