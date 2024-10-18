import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserModel } from "../models/UserModel";

import { AuthService } from "../services/AuthService";
import { UserService } from "../services/UserService";

const authService = new AuthService();
const userService = new UserService();



export const loginUserThunk = createAsyncThunk(
    'auth/loginUser',
    async(data:UserModel, { rejectWithValue }) => {
        
        try {
            let { token, userId } = await authService.logginUser(data);
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);
            let user = await userService.getUser(token, userId);
            return {
                user,
                token,
            }
        } catch (error:any) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const addUserThunk = createAsyncThunk(
    'auth/addUser',
    async (data:{token:string, userId:string}, { rejectWithValue }) =>{
        try {
            let user = await userService.getUser(data.token, data.userId);
            return {
                user,
                token:data.token,
            }
        } catch (error:any) {
            return rejectWithValue(error.response.data.message);
        }
    }
)


export const registerUserThunk = createAsyncThunk(
    'user/registerUser',
    async (data:UserModel, { rejectWithValue }) => {
        try {
            const user = await authService.registerUser(data);
            
            return {
                message:user.message
            }
        } catch (error:any) {
            return rejectWithValue(error.response.data.message);
        }
    }
);