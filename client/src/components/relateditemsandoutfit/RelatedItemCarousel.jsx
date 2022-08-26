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
    console.log(carouselSelector.scrollLeft)
    this.setState({carouselPosition: carouselSelector.scrollLeft})
  }

  clickNext () {
    const carouselSelector = document.querySelector('.carousel-cards');
    let carouselWidth = carouselSelector.clientWidth;
    carouselSelector.scrollLeft += 356;
    console.log(carouselSelector.scrollLeft)
    this.setState({carouselPosition: carouselSelector.scrollLeft})
  }

  render () {
    return (
      <div className='carousel-container'>
        {console.log(this.props)}
        {this.state.displayLeftBtn ? <button aria-labelledby="previous" className='prev-btn' onClick={this.clickPrev}><FaAngleLeft size={32} /></button> : <div></div>}
        {this.state.displayRightBtn ? <button aria-labelledby="next" className='next-btn' onClick={this.clickNext}><FaAngleRight size={32} /></button> : <div></div>}
        <div className='carousel-cards'>
        {this.props.relatedItems.map(item => (
            <RelatedItemCard key={item} p_id={item} addToOutfit={this.props.addToOutfit}/>
          ))}
        </div>
      </div>
    )
  }
}

  export default RelatedCarousel;