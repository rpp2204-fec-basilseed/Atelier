import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import RelatedItemsAndOutfit from '../components/RelatedItemsAndOutfits.jsx';

test('renders the landing page', () => {
  render(<RelatedItemsAndOutfit />);
});