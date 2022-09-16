import React from "react";
import * as ReactDOM from "react-dom/client";
import Reviews from "./components/RatingsAndReviews/Reviews.jsx";
const Axios = require("axios");
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Overview from "./components/Overview.jsx";
import QandA from "./components/QandA.jsx";
import RelatedItemsAndOutfits from "./components/relateditemsandoutfit/RelatedItemsAndOutfits.jsx";
import clickWrapper from "./ClickWrapper.jsx";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curr_product_id: 71719,
      curr_product_name: "Slacker's Slacks",
      url_path: "/71719",
      numReviews: 0,
    };
    this.updateCurrentProduct = this.updateCurrentProduct.bind(this);
    this.renderStarRating = this.renderStarRating.bind(this);
    this.updateNumReviews = this.updateNumReviews.bind(this);
  }

  updateCurrentProduct(p_id) {
    this.setState({
      url_path: p_id,
      curr_product_id: p_id,
    });
    window.history.pushState("", "Atelier", this.state.url_path);
  }

  updateNumReviews(newNumReviews) {
    this.setState({ numReviews: newNumReviews });
  }

  renderStarRating(rating) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} />);
      } else if (rating < i && rating > i - 1) {
        stars.push(<FaStarHalfAlt className="reviews-halfstar" key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }

    return stars.map((star) => {
      return star;
    });
  }

  componentDidMount() {
    window.history.pushState("", "Atelier", this.state.url_path);
  }

  render() {
    const WrappedOverview = clickWrapper(Overview);
    const WrappedQandA = clickWrapper(QandA);
    const WrappedRelatedItemsAndOutfits = clickWrapper(RelatedItemsAndOutfits);
    const WrappedReview = clickWrapper(Reviews);

    return (
      <div>
        {/* <WrappedOverview
          curr_product_id={this.state.curr_product_id}
          renderStars={this.renderStarRating}
        />
        <WrappedQandA
          curr_product_id={this.state.curr_product_id}
          curr_product_name={this.state.curr_product_name}
        /> */}
        <WrappedReview
          currProduct={this.state.curr_product_id}
          renderStarRating={this.renderStarRating}
          productName={this.state.curr_product_name}
          updateNum={this.updateNumReviews}
          numReviews={this.state.numReviews}
        />
        {/* <WrappedRelatedItemsAndOutfits
          updateCurrentProduct={this.updateCurrentProduct}
          p_id={this.state.curr_product_id}
          currentProduct={this.state.curr_product_name}
          currentFeatures={[
            {
              feature: "Sole",
              value: "Rubber",
            },
            {
              feature: "Material",
              value: "FullControlSkin",
            },
            {
              feature: "Stitching",
              value: "Double Stitch",
            },
          ]}
        /> */}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
