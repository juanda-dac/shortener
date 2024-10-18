import { useAppDispatch } from "../../shared/hooks/store";
import { getLinksThunk } from "../redux/linkThunk";


export const useLinkActions = () => {
    const dispatch = useAppDispatch();

    const getLinksAction = (token:string, id:string) => {
        dispatch(getLinksThunk({token, id}));
    }

    return {
        getLinksAction
    }
}