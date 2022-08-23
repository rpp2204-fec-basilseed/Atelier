import React from 'react';
const axios = require('axios');
import Style from './Style.jsx';
import CartFavorite from './CartFavorite.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prodData: [],
      selectedStyle: ''
    }

    this.handleStyleChange = this.handleStyleChange.bind(this);
  }

  handleStyleChange(style) {
    this.setState({selectedStyle: style});
  }

  componentDidMount() {

    axios.get('http://localhost:8080/styles', {
      params: {
        curr_product_id: 71697
      }
    })
    .then((response) => {
      console.log(JSON.stringify(response.data));
      this.setState({
        prodData: response.data.results,
        selectedStyle: 0
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getSizes() {

    var sizes = Object.keys(this.state.prodData[this.state.selectedStyle].skus)
    var sizesDiv = sizes.forEach((key) => {
      return <div key={key}>{this.state.prodData[this.state.selectedStyle].skus[key].size}</div>
    });

    return (
      {sizesDiv}
    )
  }

  render() {
    var currProdImage = <div>Product Image</div>;
    var currProdName = <div>Product Name</div>;
    var currProdPrice = <div>Product Price</div>;
    var currProdSizes = <div>Sizes</div>;
    if (this.state.prodData.length !== 0) {
      currProdImage = <img src={this.state.prodData[this.state.selectedStyle].photos[0].url} alt="main product photo" />;
      currProdName = <div>{this.state.prodData[this.state.selectedStyle].name}</div>
      currProdPrice = <div>${this.state.prodData[this.state.selectedStyle].original_price}</div>
      currProdSizes = this.getSizes();
    }
    return (
      <div className="overview container">
        Overview
        <div id="overviewImg" className="container">
          {currProdImage}
        </div>
        <div className="productInfoCart container">
          <div className="container">
            <div id="prodName">{currProdName}</div>
            {currProdPrice}
          </div>
          <br />
          <div className="style container">
            <Style prodData={this.state.prodData} selectedStyle={this.state.selectedStyle} onStyleChange={this.handleStyleChange} />
          </div>
          <div className="size container">
            {currProdSizes}
          </div>
          <div>
            <CartFavorite />
          </div>
        </div>
        <div className="details container">
          Product info
        </div>
      </div>
    )
  }

}

export default Overview;