import React from 'react';

class Style extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render (){
    var listProducts = this.props.prodData.map((product) =>
      <div key={product.style_id} className="thumbnail container"><img className="style" src={product.photos[0].thumbnail_url} /></div>
    )

    return (
      <div>{listProducts}</div>
    )
  }
}

export default Style;