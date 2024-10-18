import { useAppDispatch } from "./store";
import { findMenuThunk, findMenuAuthThunk } from "../redux/menuThunk";
import { ProfileModel } from "../models/MenuModel";

export const useMenuActions = () => {
    const dispatch = useAppDispatch();

    const findMenuAction = () => {
        dispatch(findMenuThunk());
    }

    const findMenuAuthenticatedAction = (profile: ProfileModel) => {
        dispatch(findMenuAuthThunk(profile));
    }

    return {
        findMenuAction,
        findMenuAuthenticatedAction
    }
}