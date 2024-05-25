import {FaStar} from "react-icons/fa"
const index = ({name}: {name: string}) => {
  return (
    <div>
      {[...Array(5).map(star =>{
        return (
          <label>
            <input type="radio" name={name}>
            <FaStar size={50}></FaStar>
            </input>
          </label>
        )
      })]}
    </div>
  )
}

export default index