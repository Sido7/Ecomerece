import express from "express";
import {Router} from "express";
import { addressSchema } from "../schemas/address.schema";
import { validateSchema } from "../middleware/schemaValidator.middleware";
import { authenticate } from "../middleware/auth.middleware";
import { autheriseAdmin } from "../middleware/admin.authz.middleware";
import { catchErrorWrapper } from "../middleware/catchError.wrapper.middleware";
import {createAddress} from "../controllers/address.controller"


const route: Router = Router();

route.post("/address",validateSchema(addressSchema),authenticate,autheriseAdmin,catchErrorWrapper(createAddress));

export default route
