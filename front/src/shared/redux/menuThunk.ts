import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProfileModel } from "../models/MenuModel";
import { MenuService } from "../services/MenuService";

const menuService = new MenuService()

export const findMenuThunk = createAsyncThunk("menu/findMenu", async (_) => {
    return await menuService.findMenu();
});

export const findMenuAuthThunk = createAsyncThunk("menu/findMenuAuth", async(profile:ProfileModel)=>{
    return await menuService.findMenuUserRegistered(profile);
});