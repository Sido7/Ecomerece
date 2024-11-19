import { Request, Response } from "express";
import { loginandSignupService } from "../services/index";
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken'
import { secrets } from "../secrets";
import { BadRequestError } from "../exceptions/badRequest.error";
import { ErrorCode } from "../exceptions/base.error";
import { PasswordValidationError } from "../exceptions/password.validation.error";


export const signUp = async (req: Request, res: Response) => {
    const userExist = await loginandSignupService.findUser({email:req.body.email})
    if(userExist[0]){
        throw new BadRequestError('User already exist', ErrorCode.USER_ALREADY_EXIST)
    }
    const hashPassword = bcrypt.hashSync(req.body.password, 10);

    const userData = await loginandSignupService.signUp(req.body.userName, hashPassword, req.body.email)
   
     res.status(200).json({data: userData})
     return;
}


export const login = async (req: Request, res: Response) => {

    
        const userExist = await loginandSignupService.findUser({email: req.body.email})
    if(!userExist[0]){
        throw new BadRequestError('User not found', ErrorCode.USER_NOT_FOUND)
    }
    const userPassword = userExist[0].password
    if(!bcrypt.compareSync(req.body.password, userPassword)){
        throw new PasswordValidationError('Invalid password', ErrorCode.INVALID_PASSWORD)
    }
    const token = Jwt.sign({email:userExist[0].email},'mySecretKey', {expiresIn: '1d'})
        
     res.status(200).json({
        message: 'Login success',
        token: token
    })
}

export const findMe = async (req: Request, res: Response) => {
    console.log(res.locals)
    res.status(200).json({data: "this is me hustling"})
}