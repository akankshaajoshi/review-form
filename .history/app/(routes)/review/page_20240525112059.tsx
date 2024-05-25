'use server'

import { FormEvent } from "react";

export default async function Review(){
    async function onSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: formData,
        })
        const data= await response.json();
    }
    const ratings = [1, 2, 3, 4, 5];
    return (
        <div className="flex items-center w-[80vw] h-auto p-4">
            <h2 className="text-xl text-bold">Leave a review</h2>
            <form onSubmit={onSubmit}>
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
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}