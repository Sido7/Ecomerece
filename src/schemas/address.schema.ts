import {z} from "zod";


export const addressSchema = z.object({
    line1: z.string().min(1,"Line 1 is required").max(30,"Line 1 must be less than 30 characters"),
    line2: z.string().min(1,"Line 2 is required").max(30,"Line 2 must be less than 30 characters"),
    city: z.string().min(1,"City is required").max(30,"City must be less than 30 characters"),
    country: z.string().min(1,"Country is required").max(30,"Country must be less than 30 characters"),
    pincode: z.string().min(1,"Pincode is required").max(6,"Pincode is required")
})
