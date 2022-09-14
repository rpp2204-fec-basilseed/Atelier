import React from "react";
import Helpful from "./Helpful.jsx";
import Report from "./Report.jsx";
import { AiOutlineCheck } from "react-icons/ai";
const moment = require("moment");

export default function DisplayReview({
  reviewsList,
  displayedReviews,
  renderStarRating,
  reviewWasHelpful,
}) {
  return reviewsList.slice(0, displayedReviews).map((review) => {
    return (
      <div
        key={review.review_id}
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <div style={{ display: "flex" }}>
          <div>{renderStarRating(review.rating)}</div>
          <div style={{ paddingLeft: "200px" }}>
            {review.reviewer_name}, {moment(review.date).format("LL")}
          </div>
        </div>
        <div style={{ fontWeight: "bold", padding: "10px 0px" }}>{review.summary}</div>
        <div
          style={{
            width: "500px",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            padding: "10px 0px"
          }}
        >
          {review.body}
        </div>
        <div className="review-photo">
          {review.photos.length > 0
            ? review.photos.map((photo) => (
                <img
                  src={`${photo.url}`}
                  alt=""
                  width="50px"
                  style={{ padding: "5px" }}
                  key={photo.url}
                  onMouseEnter={(e) => (e.target.width = 200)}
                  onMouseLeave={(e) => (e.target.width = 50)}
                ></img>
              ))
            : null}
        </div>
        <div className="review-recommended">
          {review.recommend ? (
            <p>
              <AiOutlineCheck style={{ marginRight: "5px" }} />I recommend this
              product!{" "}
            </p>
          ) : null}
        </div>
        <div
          className="helpful"
          style={{ paddingTop: "10px", display: "flex" }}
        >
          <div style={{ paddingRight: "20px" }}>Was this review helpful?</div>
          <Helpful
            helpfulness={review.helpfulness}
            reviewId={review.review_id}
          />
          <div
            className="helpful-report-spacing"
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
          >
            ||
          </div>
          <Report review_id={review.review_id} />
        </div>
        <hr></hr>
      </div>
    );
  });
}

/*
Review Structure:

  {
    body: "- If the reviewer recommends buying the product, the text “I recommend this product” and a checkmark icon will display below the review",
    date: "2022-06-07T00:00:00.000Z",
    helpfulness: 118,
    photos: [],
    rating: 5,
    recommend: true,
    response: null,
    review_id: 1275188,
    reviewer_name: "test",
    summary: "love it"
  }


*/
