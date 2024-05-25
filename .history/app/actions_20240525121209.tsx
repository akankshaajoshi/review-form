'use server'

import {revalidatePath} from "next/cache";
import {sql} from "@vercel/postgres"
import {z} from 'zod'
// CREATE TABLE reviews (
//     id SERIAL PRIMARY KEY,
//      safety INTEGER NOT NULL,
//     communication INTEGER NOT NULL,
//      recommend CHAR NOT NULL );
export async function createReview(prevState: {message: string}, formData: FormData){
    const schema = z.object({
        safety: z.number(),
        communication: z.number(),
        recommend: z.string(),
    })
    const parse = schema.safeParse({
        safety: formData.get('safety'),
        communication: formData.get('communication'),
        recommend: formData.get('recommend'),
    })

    if (!parse.success) {
        console.log("incorrect parse")
        return { message: "Failed to create todo" };
      }

    const data = parse.data

    try{
        await sql`
        INSERT INTO reviews(safety, communication, recommend) VALUES (${data.safety}, ${data.communication}, ${data.recommend})
        `
        // revalidatePath('/reviews/' )
        return {message: `Added review successfully.`}
    }catch(err){
        console.log("errror here")
        return {message: `Failed to add review.`}
    }
}