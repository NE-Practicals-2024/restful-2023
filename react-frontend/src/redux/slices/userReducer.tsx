import { Slice, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types";

const initialState: {
    user: IUser;
    token: string;
    isLoggedIn: boolean;
} = {
    user: {
        id: 0,
        names: "",
        email: "",
        role: ""
    },
    token: "",
    isLoggedIn: false
};

const userSlice: Slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.isLoggedIn = true;
            state.user = { ...payload.user };
            state.token = payload.token
        },

        logout: (state,payload) => {
            state.isLoggedIn = false;
            state.user = {
                ...initialState.user
            }
            state.token = ""
            state.users = []
            window.location.replace("/auth/login");
        }
    }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;