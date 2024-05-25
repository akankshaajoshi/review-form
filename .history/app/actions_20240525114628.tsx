'use server'

import {revalidatePath} from "next/cache";
import {sql} from "@vercel/postgres"
import {z} from 'zod'

export async function createReview(prevState: any, formData: FormData){
    const schema = z.object({
        safety: z.number(),
        communication: z.number(),
        recommend: z.boolean(),
    })
    const data = schema.parse(formData)

    try{
        await sql`
        INSERT INTO reviews VALUES (${data.safety}, ${data.communication}, ${data.recommend})
        `
        revalidatePath('/reviews/' )
        return {message: `Added review successfully.`}
    }catch(err){
        return {message: `Failed to add review.`}
    }
}