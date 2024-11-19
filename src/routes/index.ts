import loginRouter from "./login.router";
import productRouter from "./product.router";
import { Router } from "express";

const route: Router = Router();

route.use('/v1', loginRouter)
route.use('/v1', productRouter)

export default route