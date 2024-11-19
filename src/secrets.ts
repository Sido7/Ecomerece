import dotenv from 'dotenv';
dotenv.config({path: '.env'});

export const  secrets = {
    Port: process.env.PORT,
    key : process.env.key
}