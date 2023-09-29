import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    error: null,
    isLoggedIn: false,
    verifyEmail: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerPending: (state) => {
            state.loading = true
            state.error = null
        },
        registerSuccessful: (state, action) => {
            state.loading = false
            state.user = action.payload
            state.error = null
        },
        registerFailed: (state) => {
            state.loading = false
            state.error = true
        },
        loginPending: (state) => {
            state.loading = true
            state.isLoggedIn = false
            state.error = null
        },
        loginSuccessful: (state, action) => {
            state.loading = false
            state.user = action.payload
            state.isLoggedIn = true
            state.error = null
        },
        loginFailed: (state) => {
            state.loading = false
            state.isLoggedIn = false
            state.error = true
        },
        loginPending: (state) => {
            state.loading = true
            state.isLoggedIn = false
            state.error = null
        },
        loginSuccessful: (state, action) => {
            state.loading = false
            state.user = action.payload
            state.isLoggedIn = true
            state.error = null
        },
        loginFailed: (state) => {
            state.loading = false
            state.isLoggedIn = false
            state.error = true
        },
        logoutUser: (state) => {
            state.loading = false
            state.user = null
            state.isLoggedIn = false
            state.error = null
        },
        verifyEmailPending: () => {
            state.loading = true
            state.verifyEmail = false
            state.error = false
        },
        verifyEmailSuccess: () => {
            state.loading = false
            state.verifyEmail = true
        },
        verifyEmailfailed: () => {
            state.loading = false
            state.verifyEmail = false
            state.error = true
        },
    }
})

export const {registerPending, registerSuccessful, registerFailed, loginPending, loginSuccessful, loginFailed, logoutUser, verifyEmailPending, verifyEmailSuccess, verifyEmailfailed} = authSlice.actions

// export const selectUser = (state) => state.user.user

export default authSlice.reducer;