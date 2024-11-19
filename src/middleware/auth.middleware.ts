import {Request,Response,NextFunction} from 'express'
import { UnAuthorisedError } from '../exceptions/unauthorised.error'
import { BadRequestError } from '../exceptions/badRequest.error'
import { ErrorCode } from '../exceptions/base.error'
import jwt,{JwtPayload} from 'jsonwebtoken'
import { NotFoundError } from '../exceptions/notFound.error'
import { InternalError } from '../exceptions/internalError'
import { loginandSignupService } from '../services/index'

export const  authenticate  = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']
    if(!token){
        next( new NotFoundError('Token not found',ErrorCode.TOKEN_NOT_FOUND,null))
    }
    const jwtToken = token?.split(' ')[1] as string
    try{
        if (typeof token !== 'string') {
            next( new UnAuthorisedError('Invalid token', ErrorCode.INVALID_TOKEN, null));
        }
    const payload: any  = jwt.verify(jwtToken,'mySecretKey')
    if(!payload){
        next (new UnAuthorisedError('Invalid token',ErrorCode.INVALID_TOKEN,null))
    }
    const userEmail = payload['email']
    const userExist  = await loginandSignupService.findUser({email:userEmail})
    if(!userExist[0]){
       return next(new NotFoundError('User not found',ErrorCode.USER_NOT_FOUND,null))
    }
    res.locals.id =userExist[0].id
    res.locals.role = userExist[0].role
    next();
}catch(error){
    console.log("hahaha")
    next( new InternalError('Something went wrong',ErrorCode.INTERNAL_ERROR,error))
}
}