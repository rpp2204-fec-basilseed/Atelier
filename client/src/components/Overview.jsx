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
      selectedPhoto: '',
      prodRating: '',
      numReviews: '',
      quantity: 0
    }

    this.handleStyleChange = this.handleStyleChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.onPhotoClick = this.onPhotoClick.bind(this);
  }

  handleStyleChange(style) {
    this.setState({
      selectedStyle: style,
      selectedPhoto: this.state.styleData[style].photos[0].url
    });
  }

  handleSizeChange(e) {
    this.setState({
      selectedSKU: e.target.value,
      quantity: this.state.styleData[this.state.selectedStyle].skus[e.target.value].quantity
    });
  }

  componentDidMount() {

    //Product level API call
    axios.get('/products', {
      params: {
        // curr_product_id: this.props.curr_product_id
        p_id: this.props.curr_product_id
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

    //Style level API call
    axios.get('/products', {
      params: {
        // curr_product_id: this.props.curr_product_id,
        p_id: this.props.curr_product_id,
        endpoint: 'styles'
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

    //Ratings
    axios.get('/rating', {
      params: {
        productId: this.props.curr_product_id
      }
    })
    .then((response) => {
      this.setState({
        prodRating: response.data.rating
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  onPhotoClick(fullURL) {
    this.setState({selectedPhoto:fullURL});
  }

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

  render() {
    var currProdImage = <div>Product Image</div>;
    var currProdCategory = <div>Product Category</div>;
    var currProdName = <div>Product Name</div>;
    var currProdStyle = <div>Product Style</div>;
    var currProdPrice = <div>Product Price</div>;
    var currProdSizes = <div>Sizes</div>;
    var currProdCarousel = <div>Carousel</div>
    if (this.state.styleData.length !== 0) {
      currProdImage = <img id="mainImg" src={this.state.selectedPhoto} height="475" width="360" alt="main product photo" />;
      currProdCategory = <h2 id="prodCategory">{this.state.prodData.category}</h2>
      currProdName = <h1 id="prodName">{this.state.prodData.name}</h1>
      currProdStyle = <h2 id="prodStyle">Style > {this.state.styleData[this.state.selectedStyle].name}</h2>
      currProdPrice = this.state.styleData[this.state.selectedStyle].sale_price ? <h2 id="prodPrice"><span id="salePrice">${this.state.styleData[this.state.selectedStyle].sale_price} </span><span id="oldPrice">${this.state.styleData[this.state.selectedStyle].original_price}</span></h2> : <h2 id="prodPrice">${this.state.styleData[this.state.selectedStyle].original_price}</h2>
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
              {this.props.renderStars(this.state.prodRating)}
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
            <CartFavorite curr_product_id={this.props.curr_product_id} curr_sku_id={this.state.selectedSKU} styleData={this.state.styleData} selectedStyle={this.state.selectedStyle} handleSizeChange={this.handleSizeChange} quantity={this.state.quantity}/>
          </div>
        </div>
        <br></br>
        <Details prodData={this.state.prodData}/>
      </div>
    )
  }

}

export default Overview;