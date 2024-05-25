'use server'

import {revalidatePath} from "next/cache";
import {sql} from "@vercel/postgres"
import {z} from 'zod'

export async function createReview(prevState: {message: string}, formData: FormData){
    const schema = z.object({
        safety: z.number(),
        communication: z.number(),
        recommend: z.boolean(),
    })
    const data = schema.safeParse({
        safety: formData.get('safety'),
        communication: formData.get('communication'),
        recommend: formData.get('recommend'),
    })

    try{
        await sql`
        INSERT INTO reviews VALUES (${data})
        `
        revalidatePath('/reviews/' )
        return {message: `Added review successfully.`}
    }catch(err){
        return {message: `Failed to add review.`}
    }
}