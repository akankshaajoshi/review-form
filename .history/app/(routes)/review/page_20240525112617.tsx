import { FormEvent } from "react";
import { useFormState, useFormStatus } from "react-dom";
import {createReview} from "@/app/actions"

const initialState = {
    message: null,
}

const SubmitButton = () =>{
    const {pending} = useFormStatus();
    return (
        <button type="submit" aria-disabled={pending}>
            Submit
        </button>
    )
}

export default function Review(){
    const ratings = [1, 2, 3, 4, 5];
    const [state, formAction] = useFormState(createReview, intialState);
    return (
        <div className="flex items-center w-[80vw] h-auto p-4">
            <h2 className="text-xl text-bold">Leave a review</h2>
            <form action={formAction}>
                <fieldset>
                    <label htmlFor="safety">Safety</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae corporis quidem a voluptate aspernatur mollitia, odio temporibus ab consequuntur eaque labore consectetur fuga in magnam architecto saepe nostrum voluptatem?</p>
                    {ratings.map((item, index) =>{
                        return (
                            <input key={index} type="radio" name="safety" id={item.toString()} />
                        )
                    })}
                </fieldset>
                <fieldset>
                    <label htmlFor="communication">Communication</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae corporis quidem a voluptate aspernatur mollitia, odio temporibus ab consequuntur eaque labore consectetur fuga in magnam architecto saepe nostrum voluptatem?</p>
                    {ratings.map((item, index) =>{
                        return (
                            <input key={index} type="radio" name="ratings" id={item.toString()} />
                        )
                    })}
                </fieldset>
                <fieldset>
                    <label htmlFor="recomment">Would you recommend our app? </label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae corporis quidem a voluptate aspernatur mollitia, odio temporibus ab consequuntur eaque labore consectetur fuga in magnam architecto saepe nostrum voluptatem?</p>
                    <input type="radio" name="recommend" id="true" />
                    <input type="radio" name="recommend" id="false" />
                </fieldset>
                <SubmitButton/>
            </form>
        </div>
    )
}