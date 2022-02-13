import React from "react";
import { FaCalculator, FaStar } from "react-icons/fa";  // モジュールをinstallしないと使用できません

import { useState } from "react";

export const StarRating = () => {

  // Stateの定義
  const [rating, setRating] = useState(0); 

  // 配列を定義
  const elements = [...Array(10)];

  return (
    <>
      <div className="stars-container">
        {elements.map((_, index) => {
          return(
            <FaStar
              id={index + 1}
              color={rating > index ? "red" : "gray"}
              onClick={() => setRating(index + 1)}
            />
          )
        })}
      </div>
      <p>
        {rating} of {elements.length} stars
      </p>
    </>
  );
};