import { ProfileModel } from "../models/MenuModel"
import { useMenuActions } from "../hooks/useMenuActions"
import { useAppSelector } from "../hooks/store";
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface Props{
    profile?:ProfileModel
}

export function Menu({ profile }:Props){

    const menu = useAppSelector(({ menu }) => menu)
    const { findMenuAction, findMenuAuthenticatedAction } = useMenuActions();

    useEffect(()=>{
        if(!profile) {
            return findMenuAction();
        }
        return findMenuAuthenticatedAction(profile);
    },[profile])

    

    return (
        <div className="flex gap-2">
            {
                menu.buttons?.map((button, idx) => (
                        <Link to={button.to} key={idx} className="rounded-xl px-4 py-2 even:bg-amber-100 odd:bg-amber-800 font-semibold text-[14px] even:text-amber-800 odd:text-white">
                            { button.text }
                        </Link>
                ))
            }
            {
                menu.profile && (
                    <div className="flex gap-2 items-center">
                        <span className="rounded-xl px-4 py-2 hover:cursor-pointer hover:bg-amber-100 text-amber-800 font-bold">{ menu.profile.name }</span>
                    </div>
                )
            }
        </div>
    )
}