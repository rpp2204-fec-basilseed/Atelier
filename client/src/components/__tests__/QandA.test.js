import '@testing-library/jest-dom';
import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import QandA from '../QandA.jsx';

afterEach(cleanup);

test("has correct QUESTIONS & ANSWERS text", () => {


  render(<QandA />);
  const componentText = screen.queryByText(/Style/i);
  expect(componentText).toBeInTheDocument();

});