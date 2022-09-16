import React, { useState, useEffect } from "react";
import AddReview from "./AddReview.jsx";
import DisplayReview from "./DisplayReview.jsx";
import RatingBar from "./RatingBar.jsx";
import ReviewScore from "./ReviewScore.jsx";
const axios = require("axios");


export default function Reviews({ currProduct, renderStarRating, productName, updateNum, updateNumReviews }) {
  const starPercentage = (rating, total) => {
    let totalReviews = 0;

    for (let currentRating in total) {
      totalReviews += parseInt(total[currentRating]);
    }

    let barLength = Math.floor((total[rating] / totalReviews) * 200);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0",
          height: "10px",
          alignItems: "center",
        }}
      >
        <div
          style={{ border: "solid green 5px", width: `${barLength + "px"}` }}
        ></div>
        <div
          style={{
            border: "solid gray 5px",
            width: `${200 - barLength + "px"}`,
          }}
        ></div>
        <p style={{ paddingLeft: "5px" }}>({total[rating]})</p>
      </div>
    );
  };

  const [displayedReviews, setDisplayedReviews] = useState(2);

  const [metaData, setMetaData] = useState({});

  const [currReviews, setCurrReviews] = useState([]);

  const [showReview, setShowReview] = useState(false);

  const [filter, updateFilter] = useState("relevance");


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
        updateNumReviews(numReviews = reviewData.data.length)
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
        (reviewData.data.length);
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
    setDisplayedReviews((previousDisplayed) => previousDisplayed + 2);
  }

  function toggleShowReview() {
    setShowReview((showForm) => !showForm);
  }

  return (
    <div style={{ margin: "10px 10px 10px 50px", padding: "0 3vw" }}>
      <h2>RATINGS AND REVIEWS</h2>
      <div className="main" style={{ display: "flex" }}>
        <div className="ratings">
          {metaData.ratings ? <ReviewScore ratings={metaData.ratings} recommended={metaData.recommended}starRender={renderStarRating}/> : null}
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
          {metaData.characteristics ? (
            <RatingBar metaData={metaData.characteristics} />
          ) : null}
        </div>
        <div className="reviews" style={{ paddingLeft: "50px", overflowY: "auto", maxHeight: "800px" }}>
          <div
            className="total-reviews"
            style={{ display: "flex", flexDirection: "row" }}
          >
            {`${currReviews.length} reviews, sorted by:`}
            {/* <label form="filter" style={{marginRight: "10px"}}>sorted by:</label> */}
            <select
              name="filter"
              id="filters"
              style={{ marginLeft: "10px" }}
              onChange={(e) => {
                getReviews(e.target.value);
              }}
            >
              <option value="relevant">Relevance</option>
              <option value="helpful">Helpful</option>
              <option value="newest">Newest</option>
            </select>
          </div>
          <DisplayReview
            reviewsList={currReviews}
            displayedReviews={displayedReviews}
            renderStarRating={renderStarRating}
          />
          <div className="more-and-add-review" style={{ display: "flex" }}>
            {currReviews.length > 0 ? (
              <div
                style={{ border: "solid black 3px", padding: "20px" }}
                onClick={increaseDisplayedReviews}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "lightgray", e.target.style.color = "white")
                }
                onMouseLeave={(e) => (e.target.style.backgroundColor = "white", e.target.style.color = "black")}
              >
                MORE REVIEWS
              </div>
            ) : null}
            <div
              onClick={toggleShowReview}
              style={{
                border: "solid black 3px",
                padding: "20px",
                marginLeft: "40px",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "lightgray", e.target.style.color = "white")
                }
                onMouseLeave={(e) => (e.target.style.backgroundColor = "white", e.target.style.color = "black")}
            >
              ADD REVIEW
            </div>
          </div>
          <div>
            {showReview ? (
              <AddReview
                productId={currProduct}
                toggleShowReview={toggleShowReview}
                metaData={metaData}
                getReviews={getReviews}
                productName={productName}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}