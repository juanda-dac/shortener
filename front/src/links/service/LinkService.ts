import axios from "axios"
import { LinkModel } from "../model/LinkModel"

export class LinkService{
    private url = "http://localhost:3000/api/link"

    async getLinksByUser(token:string, id:string):Promise<Array<any>>{
        let response = await axios.get(`${this.url}/${id}`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })

        return response.data.links
    }

    async saveLink(data:{url:string;userId?:string;}):Promise<LinkModel>{
        let response = await axios.post(`${this.url}`,data)
        return response.data.link
    }
}