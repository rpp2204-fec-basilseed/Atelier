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

    this.handleClick = this.handleClick.bind(this);
    this.getRelatedItems = this.getRelatedItems.bind(this);
    this.getOutfitItems = this.getOutfitItems.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
  };

  getRelatedItems () {
    axios.get('/products', {params: { p_id: this.props.p_id, endpoint: 'related' }})
      .then((res) => {
        this.setState({relatedItems: res.data})
        console.log('state', this.state)
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


  handleClick(e) {
    e.preventDefault();
    console.log("You've been clicked");
  };


  render() {
    return (
    <div className="related-items-and-outfit-container">
      <div className="related-items-container">
        <RelatedCarousel relatedItems={this.state.relatedItems} addToOutfit={this.addToOutfit} />
        <OutfitCarousel outfitItems={this.state.outfitItems} updateOutfit={this.getOutfitItems} />
        {/* <h1>Related</h1>
        <div className ="related-card-container">
          {this.state.relatedItems.map(item => (
            <RelatedItem key={item.id} product={item.id} />
          ))}
          <button className="test-btn" onClick={this.handleClick}>Click Me!</button>
        </div>
      </div>
      <div className="outfit-container">
        <h1>Outfits</h1>
        {this.state.outfits.map(item => (
            <Outfit key={item.id} product={item.id} />
          ))}
        <div className="outfit-card-container">

        </div> */}
      </div>
    </div>
    );
  }
};

export default RelatedItemsAndOutfits;