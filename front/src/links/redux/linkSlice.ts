import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LinkModel } from "../model/LinkModel";
import { getLinksThunk } from "./linkThunk";

interface LinkStateModel{
    links: LinkModel[];
    loading: boolean;
    error: boolean;
    errorMsg:string;
}

const initialState:LinkStateModel = {
    links: [],
    loading: false,
    error: false,
    errorMsg: ""
}

const linkSlice = createSlice({
    name: "link",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getLinksThunk.pending, (state) => {
            state.loading = true;
        })
        .addCase(getLinksThunk.fulfilled, (state, action:PayloadAction<any>) => {
            console.log(action)
            state.links = action.payload;
            state.loading = false;
            state.error = false;
            state.errorMsg = "";
        })
        .addCase(getLinksThunk.rejected, (state) =>{
            state.loading = false;
            state.error = true;
            state.errorMsg = "An error unexpected to get links";
        })
    }
})

export default linkSlice.reducer;
// Export reducers if that exists