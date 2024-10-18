import { Router } from "express";
import { getLinkById } from "../controllers/link.controller.js";

const router = Router()

router.get("/",(req, res)=> {
    res.json({
        message: "Welcome to the API"
    })
})

router.get("/:shortedId", getLinkById)


export default router;