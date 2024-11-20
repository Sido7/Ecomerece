import { addressService } from "../services";
import { Request, Response } from "express";


export const createAddress = async (req: Request, res: Response) => {
    const userId: number  = res.locals.id
    const address = await addressService.createProduct({...req.body, userId})
    res.status(200).json({ data: address });
}