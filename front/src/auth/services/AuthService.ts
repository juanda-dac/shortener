import axios from "axios";
import { UserModel } from "../models/UserModel";

interface AuthResponse{
    message:string;
    userId:string;
    token:string;
}

export class AuthService {

    private domain = "http://localhost:3000/api/auth"

    async logginUser(user:UserModel):Promise<AuthResponse>{
        let response = await axios.post<AuthResponse>(`${this.domain}/login`, user);
        return response.data
    }

    async registerUser(user:UserModel):Promise<any>{
        let response = await axios.post(`${this.domain}/register`, user);
        return response.data;
    }

}