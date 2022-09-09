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

describe("Related Card ", () => {
  beforeEach(() => {
    const styles = {
      "product_id": "71699",
      "results": [
          {
              "style_id": 444228,
              "name": "Black",
              "original_price": "40.00",
              "sale_price": null,
              "default?": true,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  }
              ],
              "skus": {
                  "2580562": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580563": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580564": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580565": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580566": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580567": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444229,
              "name": "Grey",
              "original_price": "40.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=965&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  }
              ],
              "skus": {
                  "2580568": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580569": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580570": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580571": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580572": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580573": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444230,
              "name": "Goldenrod",
              "original_price": "40.00",
              "sale_price": "35.00",
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
                  }
              ],
              "skus": {
                  "2580574": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580575": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580576": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580577": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580578": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580579": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444231,
              "name": "Maroon",
              "original_price": "40.00",
              "sale_price": "35.00",
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1549540806-76ce9007b674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1549540806-76ce9007b674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1541214880206-03318856c6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1541214880206-03318856c6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  }
              ],
              "skus": {
                  "2580580": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580581": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580582": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580583": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580584": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580585": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444232,
              "name": "Chartreuse",
              "original_price": "40.00",
              "sale_price": "25.00",
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
                  }
              ],
              "skus": {
                  "2580586": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580587": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580588": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580589": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580590": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580591": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          },
          {
              "style_id": 444233,
              "name": "White",
              "original_price": "40.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1510217167326-549ae78e4738?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1510217167326-549ae78e4738?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  }
              ],
              "skus": {
                  "2580592": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "2580593": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "2580594": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "2580595": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "2580596": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "2580597": {
                      "quantity": 6,
                      "size": "XXL"
                  }
              }
          }
      ]
    };
    const details = {
      "id": 71699,
      "campus": "hr-rpp",
      "name": "Morning Joggers",
      "slogan": "Make yourself a morning person",
      "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
      "category": "Pants",
      "default_price": "40.00",
      "created_at": "2022-05-11T19:38:15.373Z",
      "updated_at": "2022-05-11T19:38:15.373Z",
      "features": [
          {
              "feature": "Fabric",
              "value": "100% Cotton"
          },
          {
              "feature": "Cut",
              "value": "Skinny"
          }
      ]
    };

    const mockGetUsers = jest.spyOn(RelatedItemCard, 'getItemDetails');
    mockGetUsers.mockResolvedValue(details);

    const mockGetRolesWithUsers = jest.spyOn(RelatedItemCard, 'getItemStyles');
    mockGetRolesWithUsers.mockResolvedValue(styles);
  })

  test("Related Card should be rendered", () => {
    expect(screen.queryByText(/Morning Joggers/i)).toBeInTheDocument();
  });

  test("Comparison Modal should be rendered", () => {
    expect(screen.queryByText(/PANTS/i)).not.toBeInTheDocument();
  });

  test("Comparison Modal should be rendered", () => {
    expect(screen.queryByText(/40.00/i)).not.toBeInTheDocument();
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