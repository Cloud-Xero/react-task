import React from "react";
import { FaCalculator, FaStar } from "react-icons/fa";  // モジュールをinstallしないと使用できません

import { useState } from "react";

export const StarRating = () => {

  // Stateの定義
  const [rating, setRating] = useState(0); 

  // starの数量を設定
  const elementCount = 5
  const elements = [] 
  for (let i = 0; i < elementCount; i++) {
    elements.push(i + 1);
  }

  return (
    <>
      <div className="stars-container">
        {elements.map((num) => {
          return(
            <FaStar
              id={num}
              color={rating >= num ? "red" : "gray"}
              onClick={() => setRating(num)}
            />
          )
        })}
      </div>
      <p>
        {rating} of {elementCount} stars
      </p>
    </>
  );
};