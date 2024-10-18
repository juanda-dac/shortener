import { User } from "../models/User.js";
import { Link } from "../models/Link.js";

export async function getUserById(req, res){

    try {
        const { id } = req.params
        if (id !== req.userId) return res.status(401).json({
            message: "You don't have permission for this action"
        })
        const user = await User.findOne({
            attributes:["id", "username", "email"],
            where: { id }
        })
        return res.json({
            user
        });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message:"An error unexpected"
        })
    }
}