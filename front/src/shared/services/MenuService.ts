import { MenuModel, ProfileModel } from "../models/MenuModel"

export class MenuService{

    async findMenu():Promise<MenuModel>{
        return new Promise((resolve, _) => {
            resolve({
                buttons:[
                    {
                        id:1,
                        text:"Sign Up",
                        to:"auth/register"
                    },
                    {
                        id:2,
                        text:"Login",
                        to:"auth/login"
                    }
                ],
            })
        })
    }

    async findMenuUserRegistered(profile:ProfileModel):Promise<MenuModel>{
        return new Promise((resolve, _) => {
            setTimeout(()=>{
                resolve({
                    buttons:[
                        {
                            id:1,
                            text:"Logout",
                            to:"/logout"
                        }
                    ],
                    profile
                })
            },500)
        })
    }

}