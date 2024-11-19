import {prismaClient} from "../index";

const createProduct = async (payload: any) => {
    const product  = await prismaClient.product.create({
        data: payload
    })
    return payload
}

export const listProduct = async (page: number) => {
    const take = 4
    const skip = (page-1)*take
    const product  = await prismaClient.product.findMany({
        skip:skip,
        take: take
    })
    return product
}

export const countProduct = async () => {
    const count = await prismaClient.product.count()
    return count
}
export default {
    createProduct,
    listProduct,
    countProduct
}