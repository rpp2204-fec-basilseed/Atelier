import React from 'react';
import Style from './Style.jsx';

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render (){
    var listProducts = this.props.stylesData.map((product, index) =>
      <Style key={index}
      styleNum={index}
      thumbURL={product.photos[0].thumbnail_url}
      name={product.name}
      handleStyleChange={this.props.handleStyleChange}
      selected={this.props.selectedStyle === index ? "True" : "False"}/>
    );

    return (
      <>
        <div>{listProducts}</div>
      </>
    )
  }
}

export default Styles;