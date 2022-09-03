import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Reviews from './components/RatingsAndReviews/Reviews.jsx';
const axios = require ('axios');
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import Overview from './components/Overview.jsx';
import QandA from './components/QandA.jsx';
import RelatedItemsAndOutfits from './components/relateditemsandoutfit/RelatedItemsAndOutfits.jsx';
import clickWrapper from './ClickWrapper.jsx';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curr_product_id: 71701,
      curr_product_name: 'Slacker\'s Slacks',
    }
    this.updateCurrentProduct = this.updateCurrentProduct.bind(this);
    this.renderStarRating = this.renderStarRating.bind(this);
    this.sendReview = this.sendReview.bind(this);
  }

  updateCurrentProduct(e) {
    this.setState({curr_product_id: e.event.product_id});
  }



  sendReview() {
    Axios.post('/addReview', {
      body: {
        product_id:71697,
        rating:5,
        summary:"It can't get better than this! Buy this one now!!",
        body:"Seriously. This is life changing. I have already ordered 73 more for all my family and friends.",
        recommend:true,
        name:"marysmith74",
        email:"mzmarys74@aol.com",
        photos:[]
      }
    });
  }

  render() {
    const WrappedOverview = clickWrapper(Overview);
    const WrappedQandA = clickWrapper(QandA);
    const WrappedRelatedItemsAndOutfits = clickWrapper(RelatedItemsAndOutfits);

    return (
    <div>
      <Overview curr_product_id={this.state.curr_product_id} renderStars={this.renderStarRating}/>
      <QandA curr_product_id={ this.state.curr_product_id } curr_product_name={ this.state.curr_product_name }/>
      <Reviews currProduct={this.state.curr_product_id} renderStarRating={this.renderStarRating}/>
      <RelatedItemsAndOutfits p_id={this.state.curr_product_id} currentProduct={this.state.curr_product_name} currentFeatures={[
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
      ]}/>
      <WrappedOverview curr_product_id={this.state.curr_product_id} renderStars={this.renderStarRating}/>
      <WrappedQandA curr_product_id={ this.state.curr_product_id } curr_product_name={ this.state.curr_product_name }/>
      <WrappedRelatedItemsAndOutfits p_id={this.state.curr_product_id} currentProduct={this.state.curr_product_name} currentFeatures={[
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
      ]}/>
      {/* <Reviews renderStarRating={this.renderStarRating} currProduct={this.state.curr_product_id} sendReview={this.sendReview}/> */}
    </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);