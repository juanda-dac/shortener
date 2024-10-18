import { useEffect, useState } from "react";
import { useAppSelector } from "../../shared/hooks/store";
import LinkShorted from "../../shared/libs/LinkShorted";
import { LinkService } from "../service/LinkService";

import { swalError } from "../../shared/libs/core/alerts";
import { isValidURL } from "../../shared/libs/core/regEx";
import { useNavigate } from "react-router-dom";

function LinkView(){
    
    const { user } = useAppSelector(({ user }) => user);
    const [url, setUrl] = useState("");
    const [shorted, setShorted] = useState<string>("");
    const navigate = useNavigate();

    const DOMAIN = process.env.DOMAIN

    const linkService = new LinkService();

    const handleClick = async () => {

        if(!isValidURL(url)) {
            setUrl("");
            return swalError("Enter a valid URL");
        }

        try {
            const body = {
                url,
            }
            let response = await linkService.saveLink(body);
            setShorted(`${DOMAIN}/${response.shortedId}`);
            setUrl("")
        } catch (error) {
            swalError(error.response.data.message);
        }
    }

    useEffect(() => {
        if(user?.id !== "") navigate("../dashboard");
    }, [user]);

    return (
        <div className="w-full h-[90%] flex">
            <div className="m-auto w-full max-w-[512px] h-full max-h-[442px]">
                <h2 className="text-center font-custom font-bold text-[32px]">URL Shortener</h2>
                <form className="w-full" onSubmit={(e)=> e.preventDefault()}>
                    <div className="w-full px-4 py-3">
                        <input type="text" name="url" autoComplete="off" value={url} onChange={(e) => setUrl(e.target.value)} className="w-full rounded-xl p-4 bg-amber-100 placeholder:text-amber-800 outline-none font-extralight text-amber-800" placeholder="Enter a long URL to shorten" />
                    </div>
                    <div className="w-full px-4 py-3">
                        <button onClick={handleClick} className="w-full rounded-xl p-4 text-white bg-amber-800 font-semibold">Shorten URL</button>
                    </div>
                    <div className="w-full px-4 pb-3">
                        <span className="font-thin text-amber-800">Example: https://www.google.com</span>
                    </div>
                </form>
                <div className="w-full px-4 py-3 flex flex-col gap-2">
                    <LinkShorted url={shorted} />
                </div>
            </div>
        </div>
    )
}

export default LinkView;