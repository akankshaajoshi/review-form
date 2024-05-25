import {FaStar} from "react-icons/fa"
import { useState } from "react";
import './style.css'
const Index = ({name}: {name: string}) => {
  const [rating , setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  return (
    <div>
      {[...Array(5).map((star, index) =>{
        const currentRating = index+1;
        return (
          <label key={index}>
            <input type="radio" name={name}
            onClick={()=>setRating(currentRating)}>
            </input>
            <FaStar className="star" size={50}></FaStar>
          </label>
        )
      })]}
    </div>
  )
}

export default Index