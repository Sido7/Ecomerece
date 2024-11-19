import { productServices } from "../services";
import { Request, Response } from "express";


export const createProduct = async (req: Request, res: Response) => {
    const newTag = req.body.tags.join(",");
    req.body.tags = newTag;
    const product = await productServices.createProduct(req.body);
    res.status(200).json({ data: product });
}

export const listProduct = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const count = await productServices.countProduct();
    const products = await productServices.listProduct(page);
    res.status(200).json({ 
        count: count,
        data: products });
}