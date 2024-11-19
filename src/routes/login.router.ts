import { Router } from "express";
import { signUp, login, findMe } from "../controllers/loginAndSignUp.controller";
import { catchErrorWrapper } from "../middleware/catchError.wrapper.middleware";
import { loginSchema } from "../schemas/login.schema";
import { createUserSchema } from "../schemas/user.schema";
import { validateSchema } from "../middleware/schemaValidator.middleware";
import { authenticate } from "../middleware/auth.middleware";

const route: Router = Router();

route.post("/signup",validateSchema(createUserSchema), catchErrorWrapper(signUp));
route.post("/signin",validateSchema(loginSchema), catchErrorWrapper(login));
route.get("/me",authenticate,catchErrorWrapper(findMe))

export default route