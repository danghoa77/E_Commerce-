import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null,
}

export const registerUser = createAsyncThunk('auth/register',
    async(FormData)=>{
        const response = await axios.post('http://localhost:5000/api/auth/register', FormData, {
            withCredentials :true
        })
        return response.data
    }
)
const authSlice = createSlice(
    {
        name: 'auth',
        initialState,
        reducers: {
            // eslint-disable-next-line no-unused-vars
            setUser: (state, action) => { }
        }
    })

export const { setUser } = authSlice.actions;
export default authSlice.reducer;