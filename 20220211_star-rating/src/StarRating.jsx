import React, { useState }  from "react";
import { FaStar } from "react-icons/fa";  // モジュールをinstallしないと使用できません

export const StarRating = () => {

  const [count, setCount] = useState(3)
  const number = [...Array(5)]

  return (
    <>
      {number.map((_,n) =>{
         return( 

          <FaStar color={count > n ? "red" : "gray"} onClick={() => setCount(n+1)} />
         )
      })}
      <p>
         {count} of {number.length} stars
      </p> 
     
    </>
  );
};
