import { Router } from "express";
import { signupHandler } from "../controllers/auth.controllers";
import { validateSchema } from "../middlewares/validateSchema";
import signupUserSchema from "../schema/User.schema";

const router = Router();

router.post("/signup", validateSchema(signupUserSchema), signupHandler);

router.post("/signin", signupHandler);

export default router;
