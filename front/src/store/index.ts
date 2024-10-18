import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../auth/redux/userSlice";
import linkReducer from "../links/redux/linkSlice"
import menuReducer from "../shared/redux/menuSlice";

export const store = configureStore({
    reducer:{
        user: userReducer,
        link: linkReducer,
        menu: menuReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch