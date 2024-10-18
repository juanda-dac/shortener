import { useEffect, useState } from "react";
import LinkShortedItem from "../../shared/libs/LinkShortedItem";
import { useLinkActions } from "../hooks/useLinkActions";
import { useAppSelector } from "../../shared/hooks/store";
import { useNavigate } from "react-router-dom";
import { LinkService } from "../service/LinkService";

export default function Dashboard(){

    const [url, setUrl] = useState("");
    
    const navigate = useNavigate();
    const { user, link } = useAppSelector((state) => state);
    const { getLinksAction } = useLinkActions();

    const linkService = new LinkService();

    const saveLink = () => {
        if(!url) return;
        linkService.saveLink({
            url,
            user:user.user?.id
        });
    }

    useEffect(() => {
        getLinksAction(user.token, user.user?.id);
    }, [user]);

    useEffect(() => {
        if(!user.user?.id) navigate("../short");
    }, [user]);

    return (
        <div className="w-full h-[90%] flex">
            <div className="m-auto w-full max-w-[512px] h-full max-h-[442px]">
                <h2 className="px-4 font-custom font-bold text-[32px]">Your Links</h2>
                <form className="w-full" onSubmit={(e)=> e.preventDefault()}>
                    <div className="w-full px-4 py-3 flex">
                        <input type="text" name="url" autoComplete="off" onChange={(e) => {}} className="w-full rounded-xl p-4 bg-amber-100 placeholder:text-amber-800 outline-none font-extralight text-amber-800" placeholder="Enter a long URL to shorten" />
                    </div>
                    <div className="w-full px-4 py-3">
                        <button className="w-full rounded-xl p-4 text-white bg-amber-800 font-semibold">Shorten URL</button>
                    </div>
                    <div className="w-full px-4 pb-3">
                        {/* HERE LINK SHORTED */}
                        <span className="font-thin text-amber-800">Example: https://www.google.com</span>
                    </div>
                </form>
                <div className="w-full px-4 py-3 flex flex-col gap-2">
                    {/* HERE TABLE OF LINKS */}
                    <div>
                        <LinkShortedItem />
                    </div>
                </div>
            </div>
        </div>
    )
}