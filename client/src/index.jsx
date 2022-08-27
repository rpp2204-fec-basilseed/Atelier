import React from 'react';
import ReactDOM from 'react-dom';
import RelatedItemsAndOutfits from './components/relateditemsandoutfit/RelatedItemsAndOutfits.jsx';

ReactDOM.render(
  <RelatedItemsAndOutfits p_id={71704} currentProduct={"YEasy 350"} currentFeatures={[
    {
        "feature": "Sole",
        "value": "Rubber"
    },
    {
        "feature": "Material",
        "value": "FullControlSkin"
    },
    {
        "feature": "Stitching",
        "value": "Double Stitch"
    }
]}/>,
  document.getElementById('root')
);
