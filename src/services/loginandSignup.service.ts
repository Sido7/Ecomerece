import {prismaClient} from "../index";


const signUp = async (userName: string,password: string, email: string) => {

    const user = await prismaClient.user.create({
        data: {
            name: userName, 
            password: password,        
            email: email            
        }
    })

    return user
}

const findUser = async (payload: any) => {

    const filter: any = {}
    if(payload.email){
        filter.email = payload.email
    }
    const user = await prismaClient.user.findMany({
        where: filter
})
   return user
}

export default {
    signUp,
    findUser
}   