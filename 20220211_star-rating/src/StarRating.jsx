import React, { useState }  from "react";
import { FaStar } from "react-icons/fa";  // モジュールをinstallしないと使用できません

export const StarRating = () => {

  const [count, setCount] = useState(2)

  const number = [1,2,3,4,5]

  return (
    <>
      {number.map((number) =>{
         return( 

          <FaStar color={count > number-1 ? "red" : "gray"} id={number} onClick={() => setCount(number)} />
         )
      })}
      <p>
         {count} of {number.length} stars
         
      </p> 
     
    </>
  );
};
