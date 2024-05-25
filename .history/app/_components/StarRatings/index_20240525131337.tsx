import {FaStar} from "react-icons/fa"
import React, { useState } from "react";
import './style.css'

interface StarProps {
  name: string;
};

const Index : React.FC<StarProps> = ({name}) => {
  const [rating , setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  return (
    <div className="flex flex-row gap-x-5">
      {[...Array(5)].map((star, index) =>{
        const currentRating: number = index+1;
        return (
          <label key={index}>
            <input type="radio" name={name}
            className="hidden"
            value={index+1}
            onClick={()=>setRating(currentRating)}>
            </input>
            <FaStar className="star" size={40} color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={()=>setHover(currentRating)}
            onMouseLeave={()=>setHover(0)}
            ></FaStar>
          </label>
        )
      })}
    </div>
  )
}

export default Index