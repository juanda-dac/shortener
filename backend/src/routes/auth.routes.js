import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js"

const authRoutes = Router();

authRoutes.post("/login", login)
authRoutes.post("/register", register)

export default authRoutes;