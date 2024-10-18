import { Router } from "express";
import { getUserById } from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/token.js";
import { authenticated } from "../middlewares/auth.js"

const userRoutes = Router();

userRoutes.get("/:id",[verifyToken, authenticated], getUserById)


export default userRoutes;