import WorldIcon from "../../assets/world.svg"

export default function LinkShortedItem(){
    return (
        <div className="flex items-center gap-2">
            <div className="p-4 rounded-xl bg-amber-100">
                <img src={WorldIcon} alt="World Icon" />
            </div>
            <div className="flex flex-col text-amber-800">
                <span className="font-bold">https://www.google.com</span>
                <span className="font-light">https://localhost:3000/ASDssE</span>
            </div>
        </div>
    )
}