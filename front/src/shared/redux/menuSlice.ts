import { createSlice } from "@reduxjs/toolkit";
import { MenuModel } from "../models/MenuModel";
import { findMenuThunk, findMenuAuthThunk } from "./menuThunk";

const initialState:MenuModel = {
    buttons:[],
    profile:undefined
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(findMenuThunk.fulfilled, (state, action)=>{
            state.buttons = action.payload.buttons;
            state.profile = undefined;
        })

        builder.addCase(findMenuAuthThunk.fulfilled, (state, action) => {
            state.buttons = action.payload.buttons;
            state.profile = action.payload.profile;
        })
    },
})

export default menuSlice.reducer;

// Here exports reducers actions if exists