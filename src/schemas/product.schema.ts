import { create } from "domain";
import {z} from "zod";

export const createProductSchema = z.object({
    name: z.string().min(1,"Product name is required").max(30,"Product name must be less than 30 characters"),
    price: z.number().min(1,"Product price is required"),
    tags: z.array(z.string()).min(1,"Product tag is required")
})