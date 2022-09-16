import React from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

class RelatedCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLeftBtn: true,
      displayRightBtn: true,
    }
    this.clickPrev = this.clickPrev.bind(this);
    this.clickNext = this.clickNext.bind(this);
  }

  clickPrev () {
    const carouselSelector = document.querySelector('.carousel-cards');
    let carouselWidth = carouselSelector.clientWidth;
    carouselSelector.scrollLeft -= 350;
    this.setState({carouselPosition: carouselSelector.scrollLeft})
  }

  clickNext () {
    const carouselSelector = document.querySelector('.carousel-cards');
    let carouselWidth = carouselSelector.clientWidth;
    carouselSelector.scrollLeft += 350;
    this.setState({carouselPosition: carouselSelector.scrollLeft})
  }

  render () {
    return (
      <div className='carousel-container'>
        {this.state.displayLeftBtn ? <button data-testid="r-prev" aria-labelledby="previous" className='prev-btn' onClick={this.clickPrev}><FaAngleLeft size={32} /></button> : <div></div>}
        {this.state.displayRightBtn ? <button data-testid="r-next" aria-labelledby="next" className='next-btn' onClick={this.clickNext}><FaAngleRight size={32} /></button> : <div></div>}
        <div className='carousel-cards'>
        {this.props.relatedItems.map(item => (
            <RelatedItemCard
              key={item}
              p_id={item}
              currentProduct={this.props.currentProduct}
              currentFeatures={this.props.currentFeatures}
              updateCurrentProduct={this.props.updateCurrentProduct}
              renderStarRating={this.props.renderStarRating}
            />
          ))}
        </div>
      </div>
    )
  }
}

  export default RelatedCarousel;