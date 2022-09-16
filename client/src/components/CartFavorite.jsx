import React from 'react';
const axios = require('axios');

class CartFavorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSKU: '',
      quantity: ''
    }
    this.handleAddToBag = this.handleAddToBag.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.noStock = false;
  }

  handleAddToBag(e) {

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
      // console.log(response);
      console.log('Added to CART');
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  handleQuantityChange(e) {
    this.setState({quantity: e.target.value});
  }

  getSizes() {
    if (this.props.styleData.length === 0) {
      return <div>No style selected</div>
    }
    var sizes = Object.keys(this.props.styleData[this.props.selectedStyle].skus);
    var outOfStock = true;

    //Check to see if all sizes are out of stock, and remove a size if it is out of stock
    for (var i = 0; i < sizes.length; i++) {
      var key = sizes[i];
      if (this.props.styleData[this.props.selectedStyle].skus[key].quantity !== 0) {
        outOfStock = false;
      }
      if (this.props.styleData[this.props.selectedStyle].skus[key].quantity === 0) {
        sizes.splice(i, 1);
        i = i - 1;
      }
    }

    var sizesDiv;

    if (!outOfStock && sizes.length !== 0) {
      sizesDiv = sizes.map((key) => {
        return <option value={key} key={key}>{this.props.styleData[this.props.selectedStyle].skus[key].size}</option>
      });
      sizesDiv.unshift(<option defaultValue="SELECT SIZE" key="select size">SELECT SIZE</option>);
      return (
        <select name="SELECT SIZE" onChange={this.props.handleSizeChange}>{sizesDiv}</select>
      )
    } else {
      this.noStock = true;
      return <div>No sizes available</div>
    }
  }

  quantityDropdown(quantity) {

    if (quantity > 0) {
      var quantities = [];
      for (var i = 1; i <= quantity; i++) {
        quantities.push(i);
      }

      var quantSelection = quantities.map((q) => {
        if (q === 1) {
          return <option defaultValue={q} key={q}>{q}</option>
        }
        return <option value={q} key={q}>{q}</option>
      });
      console.log('Making list for quantity: ' + quantity);
      return (
        <select name="SELECT QUANTITY" onChange={this.handleQuantityChange}>{quantSelection}</select>
      )
    } else {
      return <div>No stock for this style and size</div>
    }

  }

  render (){
    var sizes = this.getSizes();
    var quantities = this.props.quantity > 0 ? <div>{this.quantityDropdown(this.props.quantity)}</div> : <div></div>
    var cart = this.noStock !== true ? <button onClick={this.handleAddToBag}>ADD TO CART</button> : <button type="button" disabled>Out of Stock</button>
    return (
      <div className="bag favorite container">
        {sizes}
        {quantities}
        <br/>
        {cart}
      </div>
    )
  }
}

export default CartFavorite;