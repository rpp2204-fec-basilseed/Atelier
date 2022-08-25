import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Reviews from './component/Reviews.jsx';
const Axios = require ('axios');

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curr_product_id: 71697,
      curr_product_name: 'Camo Onesie'
    }
    this.updateCurrentProduct = this.updateCurrentProduct.bind(this);
    this.renderStarRating = this.renderStarRating.bind(this);
  }

  updateCurrentProduct(e) {
    this.setState({curr_product_id: e.event.product_id});
  };

  /*
  Render Star Rating takes in the rating (a number) and returns a div with up to 5 stars
  usage example =>  <div>{renderStarRating(product.score)}</div>
  */

  renderStarRating(rating) {

    const stars = [];

    for(let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i}/>);
      } else {
        stars.push(<AiOutlineStar key={i}/>)
      }
    }

    return stars.map((star) => {
      return star
    })

  }

  render() {
    return (
      <Reviews />
      <Overview curr_product_id={this.state.curr_product_id} />
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);