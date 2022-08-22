import '@testing-library/jest-dom';
import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import Overview from '../Overview.jsx';

afterEach(cleanup);

test("Rendering test", () => {


  render(<Overview />);
  const componentText = screen.queryByText(/Overview/i);
  expect(componentText).toBeInTheDocument();


});