import { useAppDispatch } from "../../shared/hooks/store";
import { addUserThunk, loginUserThunk, registerUserThunk } from "../redux/authThunk";
import { UserModel } from "../models/UserModel";
import { removeUserReducer } from "../redux/userSlice";

export const useUserActions = () => {
    const dispatch = useAppDispatch()

    const loginUserAction = (user: UserModel) => {
        dispatch(removeUserReducer())
        dispatch(loginUserThunk(user));
    }

    const addUserAction = (token:string, userId:string) => {
        dispatch(addUserThunk({ token, userId }))
    }

    const logoutUser = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        dispatch(removeUserReducer());
    }
    

    return {
        loginUserAction,
        addUserAction,
        logoutUser
    }
}