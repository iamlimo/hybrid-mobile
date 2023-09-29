import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios";



export const registerUser = createAsyncThunk(
    'registerUser',
        async(values)=>{
            const response = await axios
            .post('auth/register', values)
            .then(response => {
        		console.log(response.data.message);
        	  if (response.data.status === true) {
                console.log('registration successfull');
        	  } else if (response.data.status === false){
                console.log(response.data.message);
              }
        	})
        	.catch(error => {
        	  console.error('Registration failed:', error.data.message);
        	  setError('Registration failed. Please try again later.');
        	});
        }
);

const initialState = {
    loading: false,
    register: null,
    error: null,
}

 const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.pending,(state)=>{
            state.loading = true;
            state.register = null;
            state.error = null;
        })
        .addCase(registerUser.fulfilled,(state, action)=>{
            state.loading = false;
            state.register = action.payload;
            state.error = null;
        })
        .addCase(registerUser.rejected,(state, action)=>{
            state.loading = false;
            state.register = null;
            state.error = 'Registration failed. Please try again later.'
        })
    }
 })

 export default registerSlice.reducer;

