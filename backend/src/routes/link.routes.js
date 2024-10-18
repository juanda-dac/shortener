import { Router } from "express";
import { createUrlShortened, getLinkById, getLinksByUser, getLinks } from "../controllers/link.controller.js";
import { verifyToken } from "../middlewares/token.js";
import { authenticated } from "../middlewares/auth.js"

const linkRoutes = Router();

linkRoutes.post("/", createUrlShortened);
linkRoutes.get("/", getLinks);
linkRoutes.get("/:id", [verifyToken, authenticated], getLinksByUser)

export default linkRoutes;