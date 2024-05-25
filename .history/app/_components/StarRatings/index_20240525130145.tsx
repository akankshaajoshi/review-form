import {FaStar} from "react-icons/fa"
import { useState } from "react";
import './style.css'
const Index = ({name}: {name: string}) => {
  const [rating , setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  return (
    <div>
      {[...Array(5).map((star, index) =>{
        const currentRating: number = index+1;
        return (
          <label key={index}>
            <input type="radio" name={name}
            onClick={()=>setRating(currentRating)}>
            </input>
            <FaStar className="star" size={50} color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={()=>setHover(currentRating)}
            onMouseLeave={()=>setHover(0)}
            ></FaStar>
          </label>
        )
      })]}
    </div>
  )
}

export default Index