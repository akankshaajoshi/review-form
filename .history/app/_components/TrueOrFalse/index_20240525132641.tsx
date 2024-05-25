import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { useState } from "react";

interface TrueOrFalseProps {
    name: string;
}

const TrueOrFalse : React.FC<TrueOrFalseProps> = ({name}) =>{
    const [selected, setSelected] = useState<string>(null);
    return (
        <div className="flex flex-row gap-x-4 pt-4">
            <label className="w-[30%] rounded-md mr-[5px] p-4">
            <input type="radio" name={name}
            className="hidden"
            value="true">
            </input>
            <FaThumbsUp size={40}
            ></FaThumbsUp>
            Yes
          </label>
          <label className="w-[30%] rounded-md mr-[5px] p-4">
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