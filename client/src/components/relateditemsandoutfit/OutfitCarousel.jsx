import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import OutfitCard from './OutfitCard.jsx';

class OutfitCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLeftBtn: true,
      displayRightBtn: true
      }
      this.clickPrev = this.clickPrev.bind(this);
      this.clickNext = this.clickNext.bind(this);
      this.removeFromOutfit = this.removeFromOutfit.bind(this);
  }

  parseOutfit () {
    this.setState({outfits: localStorage.setItem('outfit', JSON.parse([]))});
  }

  removeFromOutfit (product_id) {
    let current = this.props.outfitItems;
    let toRemove = product_id;
    let index = current.indexOf(toRemove);
    if(index > -1) {
      current.splice(index, 1);
    }
    localStorage.setItem('outfit', JSON.stringify(current));
    this.props.updateOutfit();
    return;
  }

  clickPrev () {
    const carouselSelector = document.querySelector('.outfit.carousel-cards');
    let carouselWidth = carouselSelector.clientWidth;
    carouselSelector.scrollLeft -= 350;
  }

  clickNext () {
    const carouselSelector = document.querySelector('.outfit.carousel-cards');
    let carouselWidth = carouselSelector.clientWidth;
    carouselSelector.scrollLeft += 350;
  }

  render () {
    return (
      <div className='outfit carousel-container'>
        {this.state.displayLeftBtn ? <button data-testid="c-prev" aria-labelledby="previous" className='prev-btn' onClick={this.clickPrev}><FaAngleLeft size={32} /></button> : <div></div>}
        {this.state.displayRightBtn ? <button data-testid="c-next" aria-labelledby="next" className='next-btn' onClick={this.clickNext}><FaAngleRight size={32} /></button> : <div></div>}
          <div className='outfit carousel-cards'>
            <div className="outfit-items card" onClick={() => this.props.addToOutfit(this.props.p_id)}>
              <div className="add-to-outfit-card">
                <span><FaPlus size={32} /></span>
                <h3>Add Current Item to Outfit</h3>
              </div>
            </div>
            {this.props.outfitItems.map(item => (
              <OutfitCard
                key={item}
                p_id={item}
                removeFromOutfit={this.removeFromOutfit}
                renderStarRating={this.props.renderStarRating}
                updateCurrentProduct={this.props.updateCurrentProduct}
              />
            ))}
        </div>
      </div>
    )
  }
};

export default OutfitCarousel;