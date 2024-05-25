'use client'
import { useFormState, useFormStatus } from "react-dom";
import {createReview} from "@/app/actions"

const initialState = {
    message: null,
}

function SubmitButton(){
    const {pending} = useFormStatus();
    return (
        <button type="submit" aria-disabled={pending}>
            Submit
        </button>
    )
}

export default function Review(){
    const ratings = [1, 2, 3, 4, 5];
    const [state, formAction] = useFormState(createReview, initialState);
    return (
        <div className="flex flex-col items-center w-[100vw] h-[100vh]">
            <div className="flex flex-col gap-x-4 items-left mt-[10vh] h-[80vh] w-[60vw]">
            <h2 className="text-xl text-bold">Leave a review</h2>
            {state?.message}
            <form action={formAction}>
                <fieldset>
                    <label htmlFor="safety">Safety</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae corporis quidem a voluptate aspernatur mollitia, odio temporibus ab consequuntur eaque labore consectetur fuga in magnam architecto saepe nostrum voluptatem?</p>
                    {ratings.map((item, index) =>{
                        return (
                            <input key={index} type="radio" name="safety" id={item.toString()} value={item}/>
                        )
                    })}
                </fieldset>
                <fieldset>
                    <label htmlFor="communication">Communication</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae corporis quidem a voluptate aspernatur mollitia, odio temporibus ab consequuntur eaque labore consectetur fuga in magnam architecto saepe nostrum voluptatem?</p>
                    {ratings.map((item, index) =>{
                        return (
                            <input key={index} type="radio" name="communication" id={item.toString()} value={item}/>
                        )
                    })}
                </fieldset>
                <fieldset>
                    <label htmlFor="recommend">Would you recommend our app? </label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae corporis quidem a voluptate aspernatur mollitia, odio temporibus ab consequuntur eaque labore consectetur fuga in magnam architecto saepe nostrum voluptatem?</p>
                    <input type="radio" name="recommend" id="true" value="true" />
                    <input type="radio" name="recommend" id="false" value="false"/>
                </fieldset>
                <SubmitButton/>
            </form>
            </div>
        </div>
    )
}