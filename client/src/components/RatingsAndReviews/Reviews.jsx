import React, { useState, useEffect } from "react";
import DisplayReview from "./DisplayReview.jsx";
import AddReview from "./AddReview.jsx";
import RatingBar from "./RatingBar.jsx";
const axios = require("axios");

export default function Reviews({ currProduct, renderStarRating }) {

  const starPercentage = (rating, total) => {

    let totalReviews = 0;

    for (let currentRating in total) {
      totalReviews += parseInt(total[currentRating]);
    }


    let barLength = Math.floor((total[rating] / totalReviews) * 100);

    return (
      <div style={{display: "flex", flexDirection: "row", margin: "0"}}>
        <div
          style={{ border: "solid green 5px", width: `${barLength + "px"}` }}
        ></div>
        <div
        style={{ border: "solid gray 5px", width: `${100 - barLength + "px"}` }}
      ></div>
      </div>
    );
  };

  const [displayedReviews, setDisplayedReviews] = useState(4);

  const [metaData, setMetaData] = useState({});

  const [currReviews, setCurrReviews] = useState([]);

  const [showReview, setShowReview] = useState(false);

  const [filter, updateFilter] = useState("helpful");

  const getReviews = (newFilter) => {
    updateFilter(newFilter);

    axios
      .get("/review", {
        params: {
          productId: `${currProduct}&sort=${newFilter}`,
        },
      })
      .then((reviewData) => {
        setCurrReviews((priorReviews) => reviewData.data);
      })
      .then(() => {
        axios
          .get("/meta", {
            params: {
              productId: currProduct,
            },
          })
          .then((metaData) => {
            if (metaData) {
              setMetaData((priorMetaData) => metaData.data);
            }
            return;
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((error) => {
        throw error;
      });
  };

  useEffect(() => {
    axios
      .get("/review", {
        params: {
          productId: `${currProduct}&sort=${filter}`,
        },
      })
      .then((reviewData) => {
        setCurrReviews(reviewData.data);
      })
      .then(() => {
        axios
          .get("/meta", {
            params: {
              productId: currProduct,
            },
          })
          .then((metaData) => {
            if (metaData) {
              setMetaData(metaData.data);
            }
            return;
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  function increaseDisplayedReviews() {
    setDisplayedReviews((previousDisplayed) => previousDisplayed + 4);
  }

  function toggleShowReview() {
    setShowReview((showForm) => !showForm);
  }

  return (
    <div style={{ marginLeft: "10px" }}>
      <h2>Ratings and Reviews</h2>
      <div className="main" style={{ display: "flex" }}>
        <div className="ratings">
          <div className="review-score" style={{ fontSize: "36px" }}>
            {metaData.ratings
              ? renderStarRating(metaData.characteristics.Quality.value)
              : null}
          </div>
          {/* <div className='stars'>{metaData.ratings ? renderStarRating(totalScore(metaData.ratings)) : null}</div> */}
          <div>
            5 star reviews:{" "}
            {metaData.ratings ? starPercentage(5, metaData.ratings) : null}
          </div>
          <div>
            4 star reviews:{" "}
            {metaData.ratings ? starPercentage(4, metaData.ratings) : null}
          </div>
          <div>
            3 star reviews:{" "}
            {metaData.ratings ? starPercentage(3, metaData.ratings) : null}
          </div>
          <div>
            2 star reviews:{" "}
            {metaData.ratings ? starPercentage(2, metaData.ratings) : null}
          </div>
          <div>
            1 star reviews:{" "}
            {metaData.ratings ? starPercentage(1, metaData.ratings) : null}
          </div>
          <RatingBar type="Size" rating={metaData.characteristics ? metaData.characteristics.Size : null}/>
          <RatingBar type="Comfort" rating={metaData.characteristics ? metaData.characteristics.Comfort : null}/>
        </div>
        <div className="reviews" style={{ paddingLeft: "20px" }}>
          <div className="total-reviews">{`${currReviews.length} Reviews`}</div>
          <label form="filter" style={{marginRight: "10px"}}>Sort reviews by:</label>
          <select
            name="filter"
            id="filters"
            onChange={(e) => {
              getReviews(e.target.value);
            }}
          >
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
            <option value="relevant">Relevant</option>
          </select>
          <DisplayReview
            reviewsList={currReviews}
            displayedReviews={displayedReviews}
            renderStarRating={renderStarRating}
          />
          <div className="more-and-add-review" style={{ display: "flex" }}>
            <div
              style={{ border: "solid black 3px", padding: "20px" }}
              onClick={increaseDisplayedReviews}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'lightgray'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            >
              More Reviews
            </div>
            <div
              onClick={toggleShowReview}
              style={{
                border: "solid black 3px",
                padding: "20px",
                marginLeft: "40px",
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'lightgray'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            >
              Add Review
            </div>
          </div>
          <div>
            {showReview ? (
              <AddReview
                productId={currProduct}
                toggleShowReview={toggleShowReview}
                metaData={metaData}
                getReviews={getReviews}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
