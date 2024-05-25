import {FaStar} from "react-icons/fa"
const index = ({name}: {name: string}) => {
  return (
    <div>
      {[...Array(5).map(star =>{
        return (
          <label key={star}>
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