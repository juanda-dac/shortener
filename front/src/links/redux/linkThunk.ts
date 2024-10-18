import { createAsyncThunk } from "@reduxjs/toolkit";
import { LinkService } from "../service/LinkService";

const linkService = new LinkService();


export const getLinksThunk = createAsyncThunk('link/getLinks', 
    async ({token, id}:{token:string; id:string}, {rejectWithValue})=>{
        try {
            return await linkService.getLinksByUser(token, id);
        } catch (error:any) {
            console.log(error.message);
            return rejectWithValue("Error to get LINKS at API");
        }
})