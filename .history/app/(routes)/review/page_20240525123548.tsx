'use client'
import { useFormState, useFormStatus } from "react-dom";
import {createReview} from "@/app/actions"

const initialState = {
    message: null,
}

function SubmitButton(){
    const {pending} = useFormStatus();
    return (
        <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" aria-disabled={pending}>
            Submit
        </button>
    )
}

export default function Review(){
    const ratings = [1, 2, 3, 4, 5];
    const [state, formAction] = useFormState(createReview, initialState);
    return (
        <div className="flex flex-col items-center w-[100vw] h-[100vh]">
            <div className="flex flex-col gap-y-4 items-left mt-[10vh] h-[80vh] w-[60vw]">
            <h2 className="text-4xl font-extrabold">Leave a review</h2>
            {state?.message}
            <form action={formAction} className="flex flex-col gap-y-4">
                <fieldset>
                    <label htmlFor="safety" className="text-xl font-semibold">Safety</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    {ratings.map((item, index) =>{
                        return (
                            <input key={index} type="radio" name="safety" id={item.toString()} value={item}/>
                        )
                    })}
                </fieldset>
                <fieldset>
                    <label htmlFor="communication" className="text-xl font-semibold">Communication</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    {ratings.map((item, index) =>{
                        return (
                            <input key={index} type="radio" name="communication" id={item.toString()} value={item}/>
                        )
                    })}
                </fieldset>
                <fieldset>
                    <label htmlFor="recommend" className="text-xl font-semibold">Would you recommend our app? </label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <input type="radio" name="recommend" id="true" value="true" />
                    <input type="radio" name="recommend" id="false" value="false"/>
                </fieldset>
                <SubmitButton/>
            </form>
            </div>
        </div>
    )
}