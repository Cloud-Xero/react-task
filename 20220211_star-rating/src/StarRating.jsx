import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export const StarRating = ({ totalStarts = 5 }) => {
  const [selectedStarts, setSelectedStars] = useState(0);
  return (
    <>
      {[...Array(totalStarts)].map((_, i) => (
        <FaStar
          key={i}
          color={selectedStarts > i ? "red" : "grey"}
          onClick={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStarts} of {totalStarts} stars
      </p>
    </>
  );
};
