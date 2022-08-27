import React from 'react';
import Styles from './Styles.jsx';
import Details from './Details.jsx';
import CartFavorite from './CartFavorite.jsx';
import ImgCarousel from './ImgCarousel.jsx';
const axios = require('axios');

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prodData: [],
      styleData: [],
      selectedStyle: '',
      selectedSKU: '',
      selectedPhoto: ''
    }

    this.handleStyleChange = this.handleStyleChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.onPhotoClick = this.onPhotoClick.bind(this);
  }

  handleStyleChange(style) {
    console.log('STYLE CHANGE: ' + style);
    this.setState({
      selectedStyle: style,
      selectedSKU: '',
      selectedPhoto: this.state.styleData[style].photos[0].url
    });
  }

  handleSizeChange(e) {
    console.log('SIZE CHANGE SKU: ' + e.target.value);
    this.setState({selectedSKU: e.target.value});
  }

  componentDidMount() {

    axios.get('/products', {
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

    axios.get('/styles', {
      params: {
        curr_product_id: this.props.curr_product_id
      }
    })
    .then((response) => {
      this.setState({
        styleData: response.data.results,
        selectedStyle: 0,
        selectedPhoto: response.data.results[0].photos[0].url
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

  onPhotoClick(fullURL) {
    this.setState({selectedPhoto:fullURL});
  }

  render() {
    var currProdImage = <div>Product Image</div>;
    var currProdCategory = <div>Product Category</div>;
    var currProdName = <div>Product Name</div>;
    var currProdStyle = <div>Product Style</div>;
    var currProdPrice = <div>Product Price</div>;
    var currProdSizes = <div>Sizes</div>;
    var currProdCarousel = <div>Carousel</div>
    if (this.state.styleData.length !== 0) {
      currProdImage = <img id="mainImg" src={this.state.selectedPhoto} alt="main product photo" />;
      currProdCategory = <h2 id="prodCategory">{this.state.prodData.category}</h2>
      currProdName = <h1 id="prodName">{this.state.prodData.name}</h1>
      currProdStyle = <h2 id="prodStyle">Style > {this.state.styleData[this.state.selectedStyle].name}</h2>
      currProdPrice = <h2 id="prodPrice">${this.state.styleData[this.state.selectedStyle].original_price}</h2>
      currProdSizes = <select name="SELECT SIZE" onChange={this.handleSizeChange}>{this.getSizes()}</select>
      currProdCarousel = <ImgCarousel photos={this.state.styleData[this.state.selectedStyle].photos} onPhotoClick={this.onPhotoClick} />
    }
    return (
      <div className="overview-container">
        {/* {this.renderStars(4.5)} */}
        <div className="wrapper">
          <div className="overviewImages-container">
            {currProdCarousel}
            {currProdImage}
          </div>
          <div className="productInfoCart-container">
            <div className="container">
              {currProdCategory}
              {currProdName}
              {currProdStyle}
              {currProdPrice}
            </div>
            <br></br>
            <div className="style-container">
              <Styles stylesData={this.state.styleData} selectedStyle={this.state.selectedStyle} handleStyleChange={this.handleStyleChange} />
            </div>
            <br></br>
            <div className="size-container">
              {currProdSizes}
            </div>
            <div>
              <CartFavorite curr_product_id={this.props.curr_product_id} curr_sku_id={this.state.selectedSKU}/>
            </div>
          </div>
        </div>
        <br></br>
        <Details prodData={this.state.prodData}/>
      </div>
    )
  }

}

export default Overview;