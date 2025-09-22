import { clientServer } from "@/config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
    "user/login",
    async(user,thunkAPI)=>{
        try{
            const response = await clientServer.post("/login",{
                email:user.email,
                password:user.password,
            })
            if(response.data.token) {
                localStorage.setItem("token",response.data.token)
            }else{
                return thunkAPI.rejectWithValue({
                    message:"token not provided"
                })
            }
            return thunkAPI.fulfillWithValue(response.data.token)
        }catch(err){
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
)

export const registerUser = createAsyncThunk(
    "user/register",
    async(user,thunkAPI)=>{
        try{
            const request = await clientServer.post('/register',{
                username:user.username,
                email:user.email,
                name:user.name,
                password:user.password
            })
            return request.data;
        }catch(err){
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)