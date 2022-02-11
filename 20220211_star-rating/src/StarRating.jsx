import React from "react";
import { FaStar } from "react-icons/fa";  // モジュールをinstallしないと使用できません

export const StarRating = () => {
  return (
    <>
      <FaStar color="red" />
      <FaStar color="red" />
      <FaStar color="red" />
      <FaStar color="red" />
      <FaStar color="red" />
      <p>
        {/* [赤色の数をここに出力] of 5 stars */}
      </p>
    </>
  );
};
