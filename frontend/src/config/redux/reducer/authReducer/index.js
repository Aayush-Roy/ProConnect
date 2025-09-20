const { createSlice } = require("@reduxjs/toolkit");
const { connection } = require("next/server");
const { loginUser, registerUser } = require("../../action/authAction");

const initialState = {
    user:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    loggedIn:false,
    message:"",
    profileFetched:false,
    connections:[],
    connectionRequest:[]
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        reset:()=>{
            handleLoginUser:(state)=>{
                state.message="hello"
            }
        },
        extraReducer:(builder)=>{
            builder
            .addCase(loginUser.pending,(state)=>(
                state.isLoading = true,
                state.message = "Knocking the door..."
            ))
            .addCase(loginUser.fulfilled,(state,action)=>(
                state.isLoading = false,
                state.isError = false,
                state.isSuccess = true,
                state.loggedIn = true,
                state.message = "Login is Successfull"
            ))
            .addCase(loginUser.rejected,(state,action)=>(
                state.isLoading = false,
                state.isError = true,
                state.message = action.payload
            ))
            .addCase(registerUser.pending,(state)=>(
                 state.isLoading = true,
                state.message = "Registering You..."
            ))
            .addCase(registerUser.fulfilled,(state,action)=>(
                state.isLoading = false,
                state.isError = false,
                state.isSuccess = true,
                state.loggedIn = true,
                state.message = "Registration is Successfull"
            ))
            .addCase(registerUser.rejected,(state,action)=>(
                state.isLoading = false,
                state.isError = true,
                state.message = action.payload
            ))
        }
    }
})

export default authSlice.reducer;