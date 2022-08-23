// import { API_KEY } from '@env';
import React from 'react';
import Carousel from './Carousel.jsx';
import axios from 'axios';
// import { fetchProducts  } from '../../../server/api.js';

// grab current product from props
// pass related Items

class RelatedItemsAndOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItems: [
        71698,
        71699,
        71704,
        71703
      ],
      outfits: [
        71697,
        71698,
        71699,
        71701
      ]
    };

    this.handleClick = this.handleClick.bind(this);
    this.getRelatedItems = this.getRelatedItems.bind(this);
  };

  getRelatedItems () {
    axios.get('/products', {params: { p_id: 71697, endpoint: 'related' }})
      .then((res) => {
        this.setState({relatedItems: res.data})
      })
      .catch((err) => {
      console.log(err);
      });
    };

  componentDidMount () {
    this.getRelatedItems();
  };


  handleClick(e) {
    e.preventDefault();
    console.log("You've been clicked");
  };


  render() {
    return (
    <div className="related-items-and-outfit-container">
      <div className="related-items-container">
        <Carousel />
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