import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Reviews from './components/RatingsAndReviews/Reviews.jsx';
const Axios = require ('axios');
import Overview from './components/Overview.jsx';
import QandA from './components/QandA.jsx';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curr_product_id: 71697,
      curr_product_name: 'Camo Onesie',
    }
    this.updateCurrentProduct = this.updateCurrentProduct.bind(this);
    this.renderStarRating = this.renderStarRating.bind(this);
  }

  updateCurrentProduct(e) {
    this.setState({curr_product_id: e.event.product_id});
  };

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
      <div>
      <Reviews currProduct={this.state.curr_product_id}/>
      <Overview curr_product_id={this.state.curr_product_id} />
      <QandA curr_product_id={ this.state.curr_product_id } curr_product_name={ this.state.curr_product_name }/>
    </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);
