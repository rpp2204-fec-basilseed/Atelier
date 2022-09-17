import React from 'react';
import axios from 'axios';
import RelatedCarousel from './RelatedItemCarousel.jsx';
import OutfitCarousel from './OutfitCarousel.jsx';

class RelatedItemsAndOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItems: [],
      outfitItems: []
    };

    this.getRelatedItems = this.getRelatedItems.bind(this);
    this.getOutfitItems = this.getOutfitItems.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
  };

  getRelatedItems () {
    axios.get('/products', {params: { p_id: this.props.p_id, endpoint: 'related' }})
      .then((res) => {
        return [... new Set(res.data)];
      })
      .then((arr) => {
        this.setState({relatedItems: arr})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getOutfitItems () {
    if (!localStorage.getItem('outfit')) {
      localStorage.setItem('outfit', JSON.stringify([]));
    }
    this.setState({outfitItems: JSON.parse(localStorage.getItem('outfit'))});
    return;
  };

  addToOutfit (product_id) {
    let current = this.state.outfitItems;
    let toAdd = product_id;
    if (!current.includes(toAdd)) {
      current.push(toAdd);
      localStorage.setItem('outfit', JSON.stringify(current));
      this.parseOutfit;
    }
    this.getOutfitItems();
    return;
  }

  componentDidMount () {
    this.getRelatedItems();
    this.getOutfitItems();
  };

  render() {
    return (
    <div className="related-items-and-outfit-container">
      <div className="related-items-container">
        <div className="related-title-container"><h3 className="related-title">RELATED PRODUCTS</h3></div>
        <RelatedCarousel
          relatedItems={this.state.relatedItems}
          currentProduct={this.props.currentProduct}
          currentFeatures={this.props.currentFeatures}
          updateCurrentProduct={this.props.updateCurrentProduct}
          renderStarRating={this.props.renderStarRating}
        />
        <div className="outfit-title-container"><h3 className="outfit-title">YOUR OUTFIT</h3></div>
        <OutfitCarousel
          outfitItems={this.state.outfitItems}
          updateOutfit={this.getOutfitItems}
          addToOutfit={this.addToOutfit}
          p_id={this.props.p_id}
          updateCurrentProduct={this.props.updateCurrentProduct}
          renderStarRating={this.props.renderStarRating}
        />
      </div>
    </div>
    );
  }
};

export default RelatedItemsAndOutfits;