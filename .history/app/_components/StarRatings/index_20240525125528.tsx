import {FaStar} from "react-icons/fa"
const index = ({name}: {name: string}) => {
  return (
    <div>
      {[...Array(5).map((star, index) =>{
        const currentRating = index+1;
        return (
          <label key={index}>
            <input type="radio" name={name}>
            </input>
            <FaStar size={50}></FaStar>
          </label>
        )
      })]}
    </div>
  )
}

export default index