import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

export default function OverallRating({ rating, setRating }) {
  const updateRating = (newRating) => {
    setRating(newRating);
  };

  const ratingText = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great'
  };

  return (
    <div className="ratings-overall-stars" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      {rating >= 1 ? (
        <FaStar onClick={() => updateRating(1)} style={{ color: "gold" }} />
      ) : (
        <FaRegStar onClick={() => updateRating(1)} />
      )}
      {rating >= 2 ? (
        <FaStar onClick={() => updateRating(2)} style={{ color: "gold" }} />
      ) : (
        <FaRegStar onClick={() => updateRating(2)} />
      )}
      {rating >= 3 ? (
        <FaStar onClick={() => updateRating(3)} style={{ color: "gold" }} />
      ) : (
        <FaRegStar onClick={() => updateRating(3)} />
      )}
      {rating >= 4 ? (
        <FaStar onClick={() => updateRating(4)} style={{ color: "gold" }} />
      ) : (
        <FaRegStar onClick={() => updateRating(4)} />
      )}
      {rating >= 5 ? (
        <FaStar onClick={() => updateRating(5)} style={{ color: "gold" }} />
      ) : (
        <FaRegStar onClick={() => updateRating(5)} />
      )}
      <p style={{paddingLeft: "10px"}}>{`"${ratingText[rating]}"`}</p>
    </div>
  );
}
