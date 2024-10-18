import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../models/UserModel";
import { loginUserThunk, addUserThunk } from "./authThunk"

interface UserModelState{
    user?:UserModel;
    token?:string;
    loading?:boolean;
    error?:boolean;
    errorMessage?:string;
}

const initialState:UserModelState = {
    user:{
        id:"",
        username:"",
        email:""
    },
    token:localStorage.getItem("token") || undefined,
    loading:false,
    error:false,
    errorMessage:""
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        removeUserReducer: () => {
            return initialState
        }
    },
    extraReducers:(builder) => {
        builder.addCase(loginUserThunk.pending, (state)=>{
            state.loading = true
        })
        .addCase(loginUserThunk.fulfilled, (state, action:PayloadAction<any>)=>{
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            
        })
        .addCase(loginUserThunk.rejected, (state, action:any) => {
            state.loading = false;
            state.error = true;
            state.errorMessage =action.payload;
        })

        builder.addCase(addUserThunk.pending, (state)=>{
            state.loading = true
        })
        .addCase(addUserThunk.fulfilled, (state, action:PayloadAction<any>)=>{
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            
        })
        .addCase(addUserThunk.rejected, (state, action:any) => {
            state.loading = false;
            state.error = true;
            state.errorMessage =action.payload;
        })
    }
})

export default userSlice.reducer;
export const { removeUserReducer } = userSlice.actions;