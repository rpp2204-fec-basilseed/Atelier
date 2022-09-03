import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, waitFor, screen, cleanup, getByText, getByTestId} from '@testing-library/react'
import axios from 'axios';
import RelatedItemsAndOutfits from '../relateditemsandoutfit/RelatedItemsAndOutfits.jsx';
import RelatedCarousel from '../relateditemsandoutfit/RelatedItemCarousel.jsx'
import RelatedItemCard from '../relateditemsandoutfit/RelatedItemCard.jsx'
import OutfitCarousel from '../relateditemsandoutfit/OutfitCarousel.jsx'
import OutfitCard from '../relateditemsandoutfit/OutfitCard.jsx'
import ComparisonModal from '../relateditemsandoutfit/ComparisonModal.jsx'

// jest.mock('axios');
// beforeEach(async () => {
//   const expectedRelatedProducts = [71698, 71699, 71700, 71703, 71705, 71706]
//   axios.get.mockResolvedValue({data: expectedRelatedProducts})
//   }
// );

afterEach(cleanup);

// describe('Related Items and Outfits', () => {
//   test('should fetch related product data', () => {

//     await waitFor(() => {
//       render(<RelatedItemsAndOutfit />);
//     })

//     getByTestId('main-component')

//   })

// })
describe("Comparison Modal", () => {
  beforeEach(() => {
    render(<ComparisonModal currentFeatures={[{"feature": "Sole", "value": "Rubber"},
    {"feature": "Material", "value": "FullControlSkin"},
    {"feature": "Stitching", "value": "Double Stitch"}]}
    comparisonFeatures={[
    {"feature": "Sole", "value": "Rubber"},
    {"feature": "Material", "value": "FullControlSkin"},
    {"feature": "Mid-Sole", "value": "ControlSupport Arch Bridge"},
    {"feature": "Stitching", "value": "Double Stitch"}]}/>);
  });

  test("Comparison Modal should be rendered", () => {
    expect(screen.queryByText(/Double Stitch/i)).toBeInTheDocument();
  });

  test("Comparison Modal should be rendered", () => {
    expect(screen.queryByText(/Fake Item/i)).not.toBeInTheDocument();
  });

  test("Comparison Modal should be rendered", () => {
    const sharedFeature = screen.getAllByTestId(/FullControlSkin✔/i);
    expect(sharedFeature).toHaveLength(2);
  });
})
// test("Outfit Card rendered", () => {
//   render(<OutfitCard />);
//   expect(screen.queryByText(/Styles/i)).toBeInTheDocument();
// });

// test("Outfit Carousel rendered", () => {
//   render(<OutfitCarousel />);
//   expect(screen.getByTestId(/c-prev/i)).toBeInTheDocument();
//   expect(screen.getByTestId(/c-next/i)).toBeInTheDocument();
// });

// test("Related Items Card rendered", () => {
//   render(<RelatedItemCard />);
//   expect(screen.getByTestId(/r-card/i)).toBeInTheDocument();
// });

// test("RelatedItemsCarousel rendered", () => {
//   render(<RelatedCarousel />);
//   expect(screen.getByTestId(/r-prev/i)).toBeInTheDocument();
//   expect(screen.getByTestId(/r-next/i)).toBeInTheDocument();
// });


// test('RelatedItemsAndOutfit rendered', () => {
//   render(<RelatedItemsAndOutfits />);
//   expect(screen.queryByText(/RELATED ITEMS/i)).toBeInTheDocument();
// });