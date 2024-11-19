import express from "express";
import { createProduct, listProduct } from "../controllers/product.controller";
import { catchErrorWrapper } from "../middleware/catchError.wrapper.middleware";
import { createProductSchema } from "../schemas/product.schema";
import { validateSchema } from "../middleware/schemaValidator.middleware";
import { authenticate } from "../middleware/auth.middleware";
import {autheriseAdmin} from "../middleware/admin.authz.middleware"

const routes: express.Router = express.Router();

routes.post("/product",validateSchema(createProductSchema),authenticate,autheriseAdmin,catchErrorWrapper(createProduct));

routes.get("/product",authenticate,catchErrorWrapper(listProduct));

export default routes