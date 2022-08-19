import React from 'react';
const axios = require('axios');

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currProdData: [],
      selectedStyle: ''
    }
  }

  componentDidMount() {
    var config = {
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'+this.props.curr_product_id+'/styles',
      headers: {
        'Authorization': process.env.REACT_APP_API_KEY
      }
    };

    axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      this.setState({
        currProdData: response.data.results,
        selectedStyle: 0
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    var currProdImage = <div>Product Image</div>;
    var currProdName = <div>Product Name</div>;
    var currProdPrice = <div>Product Price</div>;
    if (this.state.currProdData.length !== 0) {
      currProdImage = <img src={this.state.currProdData[this.state.selectedStyle].photos[0].url} alt="main product photo" />;
      currProdName = <div>{this.state.currProdData[this.state.selectedStyle].name}</div>
      currProdPrice = <div>${this.state.currProdData[this.state.selectedStyle].original_price}</div>
    }
    return (
      <div className="overview-container">
        {currProdImage}
        {currProdName}
        {currProdPrice}
        <div>
          Style selection component
        </div>
        <div>
          Size selection component
        </div>
        <div>
          Cart/Favorite component
        </div>
        <div>
          Product info
        </div>
      </div>
    )
  }

}

export default Overview;