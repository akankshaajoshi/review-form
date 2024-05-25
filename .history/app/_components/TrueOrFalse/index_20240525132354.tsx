import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

interface TrueOrFalseProps {
    name: string;
}

const TrueOrFalse : React.FC<TrueOrFalseProps> = ({name}) =>{
    return (
        <div className="flex flex-row gap-x-4 pt-4">
            <label>
            <input type="radio" name={name}
            className="hidden"
            value="true">
            </input>
            <FaThumbsUp size={40}
            ></FaThumbsUp>
            Yes
          </label>
          <label>
            <input type="radio" name={name}
            className="hidden"
            value="false">
            </input>
            <FaThumbsDown className="star" size={40}
            ></FaThumbsDown>
            No
          </label>
        </div>
    )
}

export default TrueOrFalse;