import { prismaClient } from "../index";


 const createProduct = async (payload: any) => {
    const product  = await prismaClient.address.create({
        data: payload
    })
    return payload
}


export default {
    createProduct
}