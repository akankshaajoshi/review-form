import {FaStar} from "react-icons/fa"
import { useState } from "react";
const index = ({name}: {name: string}) => {
  const [rating , setRating] = useState(null);
  return (
    <div>
      {[...Array(5).map((star, index) =>{
        const currentRating = index+1;
        return (
          <label key={index}>
            <input type="radio" name={name}
            onClick={()=>setRating(currentRating)}>
            </input>
            <FaStar size={50}></FaStar>
          </label>
        )
      })]}
    </div>
  )
}

export default index