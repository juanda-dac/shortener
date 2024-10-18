import { toastMessage,toastMessageError } from "./core/toast";

interface Props{
    url?:string
}

export default function LinkShorted({url}:Props){

    const handleCopy = () => {
        if(!url) return toastMessageError('URL is required')
        navigator.clipboard.writeText(url)
        toastMessage("Copied to clipboard")
    }


    return (<>
    <span className="font-semibold text-[18px]">Shortened URL</span>
    <button className="w-full bg-amber-100 p-4 rounded-xl flex justify-start" onClick={handleCopy}> 
        <span className="font-normal text-amber-800">
            {url ? url:"Your URL Shorted"}
        </span>
    </button>
    </>)
}