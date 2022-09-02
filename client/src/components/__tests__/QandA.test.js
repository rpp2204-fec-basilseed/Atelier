import '@testing-library/jest-dom';
import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import QandA from '../QandA.jsx';
import Header from '../Header.jsx';
import Search from '../Search.jsx';
import Answer from '../Answer.jsx';
import Sidebar from '../Sidebar.jsx';
import AddAQuestion from '../AddAQuestion.jsx';

afterEach(cleanup);

test("Header has correct QUESTIONS & ANSWERS text", () => {
  render(<Header />);
  const componentText = screen.queryByText(/QUESTIONS & ANSWERS/i);
  expect(componentText).toBeInTheDocument();
});

// <Header /> -- need to test when props.questionAdded is true and when it's false

test("Search bar has a placeholder message", () => {
  render(<Search />);
  const placeholderText = screen.queryByPlaceholderText(/HAVE A QUESTION?/);
  expect(placeholderText).toBeInTheDocument();
});

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

// <Question /> - need to figure out how to text onChange event handler

// <AddAQuestion /> - figure out tests for functions
test("always has an ADD A QUESTION button", ()=> {
  render(<AddAQuestion />);
  const componentText = screen.queryByText(/ADD A QUESTION/i);
  expect(componentText).toBeInTheDocument();
});