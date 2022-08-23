import React from 'react';
// import { FaStar } from 'react-icons/fa'
import Card from './Card.jsx';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="outfit-items card">
      <img src="" alt="test Image" />
      <div className="outfit-item-body-container">
        <h3 className="card-title">Card Title</h3>
        <p className="card-text-content">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="card primary">Open Modal</button>
      </div>
    </div>
    );
  }
};

export default Outfit;