import loginRouter from "./login.router";
import { Router } from "express";

const route: Router = Router();

route.use('/v1', loginRouter)

export default route