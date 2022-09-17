import React from 'react';
import axios from 'axios';
import ComparisonModal from './ComparisonModal.jsx';
import { FaStar } from 'react-icons/fa'

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
      stars: '',
      isOpen: false
    }
    this.getItemDetails = this.getItemDetails.bind(this);
    this.getItemStyles = this.getItemStyles.bind(this);
    this.getStarCount = this.getStarCount.bind(this);
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
        this.setState({
          price: res.data.results[0].original_price,
          salePrice: res.data.results[0].sale_price,
          img: res.data.results[0].photos[0].url ? res.data.results[0].photos[0].url : '/No_image_available.svg.png'
        });
      })
      .catch((err) => {
      console.log(err);
      });
  }

  getStarCount () {
    axios.get('/rating', {params: { productId: this.props.p_id}})
      .then((res) => {
        this.setState({stars: res.data.rating});
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount () {
    this.getItemDetails()
    this.getItemStyles()
    this.getStarCount();
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
        <div className="related-items card" data-testid="r-card">
          <div className="card-img-container">
            <span onClick={this.openModal} className='related-products-tracker card-icon'><FaStar size={32}/></span>
            <img onClick={() => this.props.updateCurrentProduct(this.props.p_id)} className="related-img" max-width="300px" max-height="300px" src={this.state.img}  alt={this.state.name}/>
          </div>
          <div className="card-body-container">
            <h4 className="card-category">{this.state.category}</h4>
            <h3 className="card-title">{this.state.name}</h3>
            <h4 className="card-price">{this.state.salePrice ? <div className="sale-container"><span className="sale-price">${this.state.salePrice}</span><span className="original-price">${this.state.price}</span></div> : <div className="default">${this.state.price}</div>}</h4>
            <div className="rating-container">
              <div className="rating">{!isNaN(this.state.stars) ? this.props.renderStarRating(this.state.stars) : <span className="no-reviews">There are no reviews yet.</span>}</div>
            </div>
          </div>
        </div>
        {this.state.isOpen ? <ComparisonModal currentProduct={this.props.currentProduct} currentFeatures={this.props.currentFeatures} comparisonProduct={this.state.name} comparisonFeatures={this.state.features} closeModal={this.closeModal}/> : ''}
      </>
    );
  }
};

export default RelatedItemCard;