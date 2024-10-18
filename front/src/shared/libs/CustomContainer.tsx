export default function CustomContainer({ children }){
    return(
        <div className="w-full h-[80%] p-5 grid place-items-center">
            {children}
        </div>
    )
}