import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export function verifyToken(req, res, next){

    try {
        const authorization = req.header("Authorization");
        if(!authorization) return next();
    
        const [word, token] = authorization.split(" ");
        const validToken = jwt.verify(token, process.env.PRIVATE_KEY);
        req.userId = validToken.userId;
        next();
        
    } catch (error) {
        return res.status(500).json({
            message:"Token expired"
        })
    }
}