import React, { useState }  from "react";
import { FaStar } from "react-icons/fa";  // モジュールをinstallしないと使用できません

export const StarRating = () => {

  const [count, setCount] = useState(3)

  return (
    <>
      <FaStar color="red" onClick={() => setCount(1)} />
      <FaStar color={count >1 ? "red" : "gray"} onClick={() => setCount(2)} />
      <FaStar color={count >2 ? "red" : "gray"} onClick={() => setCount(3)} />
      <FaStar color={count >3 ? "red" : "gray"} onClick={() => setCount(4)} />
      <FaStar color={count >4 ? "red" : "gray"} onClick={() => setCount(5)} />
      <p>
         {count} of 5 stars
         
      </p>
    </>
  );
};
