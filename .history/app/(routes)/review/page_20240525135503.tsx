'use client'

import { useFormState, useFormStatus } from "react-dom";
import {createReview} from "@/app/actions"
import StarRating from "./../../_components/StarRatings" 
import TrueOrFalse from './../../_components/TrueOrFalse'

const initialState = {
    message: "",
    type: "",
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
            {state?.type === "success" && <p className="text-lg p-2 text-white rounded-md bg-green-500">{state?.message}</p>}
            {state?.type === "error" && <p className="text-lg p-2 text-white rounded-md bg-red-500">{state?.message}</p>}
            <form action={formAction} className="flex flex-col lg:gap-y-[20px] sm:gap-y-[30px]">
                <fieldset className="pb-6">
                    <label htmlFor="safety" className="text-xl font-semibold">Safety</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <StarRating name="safety"/>
                </fieldset>
                <fieldset className='pb-4'>
                    <label htmlFor="communication" className="text-xl font-semibold">Communication</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae corporis quidem a voluptate aspernatur mollitia, odio temporibus ab consequuntur eaque labore consectetur fuga in magnam architecto saepe nostrum voluptatem?</p>
                    <StarRating name="communication"/>
                </fieldset>
                <fieldset>
                    <label htmlFor="recommend" className="text-xl font-semibold">Would you recommend our app? </label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae corporis quidem a voluptate aspernatur mollitia, odio temporibus ab consequuntur eaque labore consectetur fuga in magnam architecto saepe nostrum voluptatem?</p>
                    <TrueOrFalse name="recommend"/>
                </fieldset>
                <SubmitButton/>
            </form>
            </div>
        </div>
    )
}