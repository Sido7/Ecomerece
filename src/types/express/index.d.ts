import  * as express from 'express' 


declare global {
    namespace Express {
      interface Request {
        user: any; // Add the properties you want
      }
    }
  }