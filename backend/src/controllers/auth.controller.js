import {User} from "../models/User.js";
import { makePasswordHash, comparePasswords } from "../libs/password.js";
import { config } from "dotenv";
import jwt from "jsonwebtoken"

config();

export const login = async (req, res) => {

    try {
        
        const { email, password } = req.body;
        console.log(`Email: ${email} Pass:${password}`)
        const user = await User.findOne({
            where: { email } 
        });
    
        if(!user) return res.status(403).json({
            message:"Invalid credentials"
        })
    
        const matchPass = await comparePasswords(password, user.dataValues.password);
    
        if(!matchPass) return res.status(403).json({
            message:"Invalid credentials"
        })
    
        const token = jwt.sign({ userId: user.dataValues.id }, process.env.PRIVATE_KEY, {
            expiresIn:3600
        })
    
        return res.json({
            message:"login message",
            userId:user.dataValues.id,
            token
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: "Error in login"
        })
    }
}

export const register = async(req, res) => {
    const { username, email, password } = req.body;
    const passwordHash = await makePasswordHash(password, 10);
    try {
        const savedUser = await User.create({
            username,
            email,
            password:passwordHash
        });

        return res.status(201).json({
            message:"User registered",
            user: savedUser.dataValues
        })
        
    } catch (error) {
        const fields = error.fields;
        if(fields.username || fields.email) return res.status(403).json({
            message:"Username or email already in use",
        });
    }
}