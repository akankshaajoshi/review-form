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
    const parse = schema.safeParse({
        safety: formData.get('safety'),
        communication: formData.get('communication'),
        recommend: formData.get('recommend'),
    })

    if (!parse.success) {
        return { message: "Failed to create todo" };
      }

    const data = parse.data

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