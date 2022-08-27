import React from 'react';
import axios from 'axios';
import ComparisonModal from './ComparisonModal.jsx';
import { FaRegStar } from 'react-icons/fa'

class RelatedItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: '',
      name: '',
      slogan: '',
      category: '',
      features: '',
      price: '',
      salePrice: '',
      img: '',
      isOpen: false
    }
    this.getItemDetails = this.getItemDetails.bind(this);
    this.getItemStyles = this.getItemStyles.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getItemDetails () {
    axios.get('/products', {params: { p_id: this.props.p_id }})
      .then((res) => {
        this.setState({
          desc: res.data.description,
          name: res.data.name,
          category: res.data.category,
          features: res.data.features,
          slogan: res.data.slogan
        });
      })
      .catch((err) => {
      console.log(err);
      });
  }

  getItemStyles () {
    axios.get('/products', {params: { p_id: this.props.p_id, endpoint: 'styles' }})
      .then((res) => {
        console.log(res.data)
        this.setState({
          price: res.data.results[0].original_price,
          salePrice: res.data.results[0].sale_price,
          img: res.data.results[0].photos[0].url
        });
      })
      .catch((err) => {
      console.log(err);
      });
  }

  componentDidMount () {
    this.getItemDetails()
    this.getItemStyles()
  }

  openModal () {
    this.setState({isOpen: true})
  }

  closeModal () {
    this.setState({isOpen: false})
  }

  render() {
    return (
      <>
        <div className="related-items card">
          <div className="card-img-container">
            <span onClick={this.openModal} className='related-products-tracker card-icon'><FaRegStar size={32}/></span>
            <img className="related-img" src={this.state.img}  alt="picture of item" />
          </div>
          <div className="card-body-container">
            <h4 className="card-category">{this.state.category}</h4>
            <h3 className="card-title">{this.state.name}</h3>
            <h4 className="card-price">${this.state.salePrice ? this.state.salePrice : this.state.price}</h4>
            <div className="rating-container">
            </div>
          </div>
        </div>
        {this.state.isOpen ? <ComparisonModal currentProduct={this.props.currentProduct} currentFeatures={this.props.currentFeatures} comparisonProduct={this.state.name} comparisonFeatures={this.state.features} closeModal={this.closeModal}/> : ''}
      </>
    );
  }
};

export default RelatedItemCard;