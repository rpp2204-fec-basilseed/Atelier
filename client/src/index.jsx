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
      curr_product_id: 71701,
      curr_product_name: "Slacker's Slacks",
    };
    this.updateCurrentProduct = this.updateCurrentProduct.bind(this);
    this.renderStarRating = this.renderStarRating.bind(this);
  }

  // updateCurrentProduct(e) {
  //   this.setState({curr_product_id: e.event.product_id});
  // };

  updateCurrentProduct(p_id) {
    // let n_url = this.state.c_url.slice(0, -5) + p_id;
    // console.log('pid', p_id)
    console.log("o state", this.state.curr_product_id);
    this.setState({
      // c_url: n_url,
      curr_product_id: p_id,
    });
    setTimeout(() => {
      console.log("n state", this.state);
    }, "1000");

    // console.log('pid2',this.state.curr_product_id)
    // location.assign(n_url);
  }

  renderStarRating(rating) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} />);
      } else if (rating < i && rating > i - 1) {
        stars.push(<FaStarHalfAlt key={i} />)
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }

    return stars.map((star) => {
      return star;
    });
  }


  componentDidMount() {
    // console.log('a', window.location.pathname.split('/')[1])
    // let u = parseInt(window.location.pathname.split('/')[1]);
    // console.log('u', u)
    // this.setState({
    //   curr_product_id: u
    // })
    // setTimeout(() => {
    //   console.log('new state', this.state)
    // }, "1000")
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
