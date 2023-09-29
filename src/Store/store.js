import { configureStore } from "@reduxjs/toolkit";
import userReducer from './AuthSlice'

const store = configureStore({
    reducer: {
        auth: userReducer,
    }
});

export default store;