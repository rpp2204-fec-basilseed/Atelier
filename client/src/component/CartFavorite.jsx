import React from 'react';

class CartFavorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleAddToBag = this.handleAddToBag.bind(this);
  }

  handleAddToBag(e) {

  }

  render (){
    return (
      <div className="bag favorite container">
        <button onClick={this.handleAddToBag}>ADD TO CART</button>
        <div>Star</div>
      </div>
    )
  }
}

export default CartFavorite;