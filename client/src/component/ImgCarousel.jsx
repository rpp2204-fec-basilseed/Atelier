import React from 'react';
import ImgSlide from './ImgSlide.jsx';

class ImgCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.handleNext = this.handleNext.bind(this);
  }

  handleNext() {

  }

  render (){
    const images = this.props.photos.map((photo) =>
      <div className="slideshowSlider" key={photo.url}>
        <ImgSlide thumbURL={photo.thumbnail_url} fullURL={photo.url} onPhotoClick={this.props.onPhotoClick}/>
      </div>
    );

    return (
      <div className="carousel-container">
        <div className="slideshow">
          {images}
        </div>
      </div>
    )
  }
}

export default ImgCarousel;