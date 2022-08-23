import React from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLeftBtn: true,
      displayRightBtn: true,
      carouselPosition: 0,
      numberOfCards: 6,
      carouselWidth: 0
    }
    this.clickPrev = this.clickPrev.bind(this);
    this.clickNext = this.clickNext.bind(this);
  }

  componentDidMount () {
    const numberCards = this.state.numberOfCards;
    const widthOfCarousel = numberCards * 300 + ((numberCards - 1) * 16)
    this.setState({carouselWidth: widthOfCarousel})
    console.log(widthOfCarousel)
  }

  clickPrev () {
    const carouselSelector = document.querySelector('.carousel-cards');
    let carouselWidth = carouselSelector.clientWidth;
    console.log(carouselWidth)
    carouselSelector.scrollLeft -= 350;
    this.setState({carouselPosition: carouselSelector.scrollLeft})
    console.log(this.state)
    // if(carouselSelector.scrollLeft > 0) {
    //   this.setState({
    //     displayLeftBtn: false,
    //     displayRightBtn: true,
    //     scroll
    //   })
    // }
  }

  clickNext () {
    const carouselSelector = document.querySelector('.carousel-cards');
    let carouselWidth = carouselSelector.clientWidth;
    carouselSelector.scrollLeft += 356;
    console.log(carouselSelector.scrollLeft);
    this.setState({carouselPosition: carouselSelector.scrollLeft})
    console.log(this.state)
    // if(carouselSelector.scrollLeft >= carouselSelector.clientWidth) {
    //   this.setState({
    //     displayLeftBtn: true,
    //     displayRightBtn: false
    //   })
    // }
  }

  render () {
    return (
      <div className='carousel-container'>
        {this.state.displayLeftBtn ? <button className='prev-btn' onClick={this.clickPrev}>Left</button> : <div></div>}
        {this.state.displayRightBtn ? <button className='next-btn' onClick={this.clickNext}>Right</button> : <div></div>}
        <div className='carousel-cards'>
          <RelatedItemCard key={1} fakeTitle={'amet'} fakeText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
          <RelatedItemCard key={2} fakeTitle={'pharetra'} fakeText={'Ut venenatis tellus metus vulputate eu scelerisque.'} />
          <RelatedItemCard key={3} fakeTitle={'donec'} fakeText={'Malesuada proin libero nunc consequat interdum.'} />
          <RelatedItemCard key={4} fakeTitle={'dictumst'} fakeText={'Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec.'} />
          <RelatedItemCard key={5} fakeTitle={'hac'} fakeText={'Quisque id diam vel quam elementum. Magna eget est lorem ipsum dolor sit amet.'} />
          <RelatedItemCard key={6} fakeTitle={'purus'} fakeText={'Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris.'} />
        </div>
      </div>
    )
  }
}

  export default Carousel;