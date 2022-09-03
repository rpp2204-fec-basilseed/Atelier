import '@testing-library/jest-dom';
import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import Overview from '../Overview.jsx';
import Style from '../Style.jsx';
import Styles from '../Styles.jsx';
import CartFavorite from '../CartFavorite.jsx';
import ImgCarousel from '../ImgCarousel.jsx';
import ImgSlide from '../ImgSlide.jsx';

afterEach(cleanup);

test("Style should be rendered", () => {
  render(<Overview />);
  const componentText = screen.queryByText(/Overview/i);
  expect(componentText).toBeInTheDocument();
  // expect(await screen.getByAltText('main product photo')).toBeInTheDocument();
});

test("Style should be rendered", () => {
  render(<Style />);
  expect(screen.queryByText(/Style/i)).toBeInTheDocument();
});

test("Styles should be rendered", () => {
  render(<Styles />);
  expect(screen.queryByText(/Styles/i)).toBeInTheDocument();
});

test("CartFavorite should be rendered", () => {
  render(<CartFavorite />);
  expect(screen.queryByText(/ADD TO CART/i)).toBeInTheDocument();
});

test("ImgCarousel should be rendered", () => {
  render(<ImgCarousel />);
  expect(screen.queryByText(/ImgCarousel/i)).toBeInTheDocument();
});

test("ImgSlide should be rendered", () => {
  render(<ImgSlide />);
  expect(screen.queryByText(/ImgSlide/i)).toBeInTheDocument();
});

