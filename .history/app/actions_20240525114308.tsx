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
}