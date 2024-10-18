import ShortUniqueId from "short-unique-id";
import {Link} from "../models/Link.js";
import { config } from "dotenv";


config()

export async function createUrlShortened(req, res){
    const { url, userId } = req.body;
    //const userId = req.userId;
    const uid = new ShortUniqueId();
    const newId = uid.rnd();
    
    try {  
        
        if(url === "") return res.status(403).json({
            message: "URL is required"
        })
        const newLinkId = await Link.create({
            url,
            shortedId: newId,
            userId: userId ? userId : null
        });

        res.status(201).json({
            message:"Link Id created",
            link: newLinkId.dataValues,
            
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export async function getLinks(req, res){
    const links = await Link.findAll();
    res.status(200).json({
        links
    });
}

export async function getLinksByUser(req, res) {

    try {
        const userId = req.userId
        const { id } = req.params;
        if(userId !== id) return res.status(401).json ({
            message:"You don't have premission for this action"
        })
        const links = await Link.findAll({ where: { userId:id } });
        return res.json({
            links
        })
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message: "An error unexpected at query"
        })
    }
    
}


export async function getLinkById(req, res) {
    const { shortedId } = req.params;
    const link = await Link.findOne({ where: { shortedId } });
    const { id, url, views } = link.dataValues;
    await link.update({
        views: views + 1
    },{
        where: { id }
    })

    res.redirect(url)
}