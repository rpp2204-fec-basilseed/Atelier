import React from 'react';
import {BsCheckLg} from 'react-icons/bs';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render (){
    var featureList = <div>Feature List</div>
    if (this.props.prodData.features !== undefined && this.props.prodData.features.length > 0) {
      featureList = this.props.prodData.features.map((product) =>
        <li key={product.feature}><BsCheckLg />{product.feature}: {product.value}</li>
      );
    }
    return (
      <div className="details-container">
        <div className="text-container">
          <h3>{this.props.prodData.slogan}</h3>
          <span>{this.props.prodData.description}</span>
        </div>
        <div className="featureList-container">
          <ul>
            {featureList}
          </ul>
        </div>
      </div>
    )
  }
}

export default Details;