// Related Items
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/{productId}/related
// returns array

import React from 'react';
// import { FaStar } from 'react-icons/fa'

class RelatedItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      p_id: 0
    }
  }

  // componentDidMount () {
  //   this.setState({
  //     relatedItems: 'results from api call'
  //   })
  // }
  render() {
    return (
    <div className="related-items card">
      <img src="" alt="test Image" />
      <div className="card-body-container">
        <h3 className="card-title">{this.props.fakeTitle}</h3>
        <p className="card-text-content">
          {this.props.fakeText}
        </p>
        <button className="card-btn primary">Open Modal</button>
      </div>
    </div>
    );
  }
};

export default RelatedItemCard;