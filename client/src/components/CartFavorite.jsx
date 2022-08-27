import React from 'react';
const axios = require('axios');

class CartFavorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleAddToBag = this.handleAddToBag.bind(this);
  }

  handleAddToBag(e) {
    console.log('Adding SKU to cart: ' + this.props.curr_sku_id);

    var data = JSON.stringify({
      "sku_id": this.props.curr_sku_id
    });

    var config = {
      method: 'post',
      url: '/cart',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render (){
    return (
      <div className="bag favorite container">
        <button onClick={this.handleAddToBag}>ADD TO CART</button>
        <div>Star</div>
      </div>
    )
  }
}

export default CartFavorite;