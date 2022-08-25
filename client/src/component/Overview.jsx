import React from 'react';
const axios = require('axios');
import Style from './Style.jsx';
import Details from './Details.jsx';
import CartFavorite from './CartFavorite.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prodData: [],
      styleData: [],
      selectedStyle: '',
      selectedSKU: '',
    }

    this.handleStyleChange = this.handleStyleChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
  }

  handleStyleChange(style) {
    this.setState({selectedStyle: style});
  }

  handleSizeChange(e) {
    console.log('Size change: ' + e.target.value);
    this.setState({selectedSKU: e.target.value});
  }

  componentDidMount() {

    axios.get('http://localhost:8080/products', {
      params: {
        curr_product_id: this.props.curr_product_id
      }
    })
    .then((response) => {
      this.setState({
        prodData: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });

    axios.get('http://localhost:8080/styles', {
      params: {
        curr_product_id: this.props.curr_product_id
      }
    })
    .then((response) => {
      // console.log(JSON.stringify(response.data));
      this.setState({
        styleData: response.data.results,
        selectedStyle: 0
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getSizes() {
    var sizes = Object.keys(this.state.styleData[this.state.selectedStyle].skus)
    var sizesDiv = sizes.map((key) => {
      return <option value={key} key={key}>
          {this.state.styleData[this.state.selectedStyle].skus[key].size}</option>
    });
    sizesDiv.unshift(<option defaultValue="SELECT SIZE" key="select size">SELECT SIZE</option>);

    return sizesDiv;
  }

  render() {
    var currProdImage = <div>Product Image</div>;
    var currProdCategory = <div>Product Category</div>;
    var currProdName = <div>Product Name</div>;
    var currProdStyle = <div>Product Style</div>;
    var currProdPrice = <div>Product Price</div>;
    var currProdSizes = <div>Sizes</div>;
    if (this.state.styleData.length !== 0) {
      currProdImage = <img src={this.state.styleData[this.state.selectedStyle].photos[0].url} alt="main product photo" />;
      currProdCategory = <h2 id="prodCategory">{this.state.prodData.category}</h2>
      currProdName = <h1 id="prodName">{this.state.prodData.name}</h1>
      currProdStyle = <h2 id="prodStyle">Style > {this.state.styleData[this.state.selectedStyle].name}</h2>
      currProdPrice = <h2 id="prodPrice">${this.state.styleData[this.state.selectedStyle].original_price}</h2>
      currProdSizes = <select name="SELECT SIZE" onChange={this.handleSizeChange}>{this.getSizes()}</select>
    }
    return (
      <div className="overview container">
        {/* {this.renderStars(4.5)} */}
        <div id="overviewImg" className="container">
          {currProdImage}
        </div>
        <div className="productInfoCart container">
          <div className="container">
            {currProdCategory}
            {currProdName}
            {currProdStyle}
            {currProdPrice}
          </div>
          <br></br>
          <div className="style container">
            <Style prodData={this.state.styleData} selectedStyle={this.state.selectedStyle} onStyleChange={this.handleStyleChange} />
          </div>
          <br></br>
          <div className="size container">
            {currProdSizes}
          </div>
          <div>
            <CartFavorite curr_product_id={this.state.curr_product_id}/>
          </div>
        </div>
        <br></br>
        <div className="details container">
          <Details prodData={this.state.prodData}/>
        </div>
      </div>
    )
  }

}

export default Overview;