import { Navigate } from "react-router-dom";
import { useUserActions } from "../hooks/useUserActions";

export function Logout(){
    const { logoutUser } = useUserActions();

    logoutUser()

    return (
        <Navigate to={"/"} />
    )
}