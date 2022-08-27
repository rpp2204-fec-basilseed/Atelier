import React from 'react';

class ImgSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbURL: this.props.thumbURL,
      fullURL: this.props.fullURL,
      showSlide: true
    }
    this.onClick = this.onClick.bind(this);

  }

  onClick() {
    // this.setState({showSlide: false});
    this.props.onPhotoClick(this.state.fullURL);
  }

  render (){

    return (
      <div className="slide"
      style={{display: this.state.showSlide ? 'block' : 'none' }}
      onClick={this.onClick} >
        <img src={this.props.thumbURL} alt="Product photo" />
      </div>
    )
  }
}

export default ImgSlide;