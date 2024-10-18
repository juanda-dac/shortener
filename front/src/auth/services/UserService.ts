import axios from "axios";
import { UserModel } from "../models/UserModel";

export class UserService{

    private domain = "http://localhost:3000";
    private endpoint = `${this.domain}/api/user`

    async getUser(token:string, id:string):Promise<UserModel>{

        let response = await axios.get(`${this.endpoint}/${id}`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        
        return response.data.user;
    }

}