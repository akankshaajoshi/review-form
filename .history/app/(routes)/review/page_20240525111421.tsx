import { FormEvent } from "react";
export default function Review(){
    async function onSubmit(event: FormEvent<HtmlFormElement>){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: formData,
        })
        const data= await response.json();
    }
    return (
        <div className="flex items-center w-[80vw] h-auto p-4">
            <h2 className="text-xl text-bold">Leave a review</h2>
            <form onSubmit={onSubmit}>


            </form>
        </div>
    )
}