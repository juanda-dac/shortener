import { Link } from "react-router-dom";
import { Menu } from "./Menu";
import { useAppSelector } from "../hooks/store";
import { useEffect, useState } from "react";
import { ProfileModel } from "../models/MenuModel";

function Header(){

    const { user } = useAppSelector(({ user }) => user);
    const [profile, setProfile] = useState<ProfileModel|undefined>(undefined);
    useEffect(() => {
        if(user?.id !== "") {
            return setProfile({
                name: user.username 
            });
        }

        setProfile(undefined)

    }, [user]);

    return (<>
    <header className="font-sans w-full flex">
        <nav className="w-[1280px] m-auto flex justify-between px-10 py-3">
            <Link to="/" className="flex items-center">
                <span className="text-[18px] font-semibold text-amber-800 align-middle">Short Link</span>
            </Link>
            <nav>
                <div className="flex gap-2">
                    <Menu profile={profile} />
                </div>
            </nav>
        </nav>
    </header>
    <hr />
    </>)
}

export default Header;