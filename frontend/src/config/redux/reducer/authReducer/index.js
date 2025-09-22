
import { createSlice } from "@reduxjs/toolkit";

import { loginUser, registerUser } from "../../action/authAction";

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

// const authSlice = createSlice({
//     name:"auth",
//     initialState,
//     reducers:{
//         reset:()=>{
//             handleLoginUser:(state)=>{
//                 state.message="hello"
//             }
//         },
//         extraReducer:(builder)=>{
//             builder
//             .addCase(loginUser.pending,(state)=>(
//                 state.isLoading = true,
//                 state.message = "Knocking the door..."
//             ))
//             .addCase(loginUser.fulfilled,(state,action)=>(
//                 state.isLoading = false,
//                 state.isError = false,
//                 state.isSuccess = true,
//                 state.loggedIn = true,
//                 state.message = "Login is Successfull"
//             ))
//             .addCase(loginUser.rejected,(state,action)=>(
//                 state.isLoading = false,
//                 state.isError = true,
//                 state.message = action.payload
//             ))
//             .addCase(registerUser.pending,(state)=>(
//                  state.isLoading = true,
//                 state.message = "Registering You..."
//             ))
//             .addCase(registerUser.fulfilled,(state,action)=>(
//                 state.isLoading = false,
//                 state.isError = false,
//                 state.isSuccess = true,
//                 state.loggedIn = true,
//                 state.message = "Registration is Successfull"
//             ))
//             .addCase(registerUser.rejected,(state,action)=>(
//                 state.isLoading = false,
//                 state.isError = true,
//                 state.message = action.payload
//             ))
//         }
//     }
// })

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         reset: (state) => {
//             state.isError = false;
//             state.isSuccess = false;
//             state.loggedIn = false;
//             state.message = "";
//         },
//     },
//     // extraReducers: (builder) => {
//     //     builder
//     //         .addCase(loginUser.pending, (state) => {
//     //             state.isLoading = true;
//     //             state.message = "Knocking the door...";
//     //         })
//     //         .addCase(loginUser.fulfilled, (state, action) => {
//     //             state.isLoading = false;
//     //             state.isError = false;
//     //             state.isSuccess = true;
//     //             state.loggedIn = true;
//     //             state.message = "Login is successful";
//     //         })
//     //         .addCase(loginUser.rejected, (state, action) => {
//     //             state.isLoading = false;
//     //             state.isError = true;
//     //             state.message = action.payload?.message || "Login failed";
//     //         })
//     //         .addCase(registerUser.pending, (state) => {
//     //             state.isLoading = true;
//     //             state.message = "Registering you...";
//     //         })
//     //         .addCase(registerUser.fulfilled, (state, action) => {
//     //             state.isLoading = false;
//     //             state.isError = false;
//     //             state.isSuccess = true;
//     //             state.loggedIn = true;
//     //             state.message = "Registration successful";
//     //         })
//     //         .addCase(registerUser.rejected, (state, action) => {
//     //             state.isLoading = false;
//     //             state.isError = true;
//     //             state.message = action.payload?.message || "Registration failed";
//     //         });
//     // },
//     extraReducer:(builder)=>{
//             builder
//             .addCase(loginUser.pending,(state)=>(
//                 state.isLoading = true,
//                 state.message = "Knocking the door..."
//             ))
//             .addCase(loginUser.fulfilled,(state,action)=>(
//                 state.isLoading = false,
//                 state.isError = false,
//                 state.isSuccess = true,
//                 state.loggedIn = true,
//                 state.message = "Login is Successfull"
//             ))
//             .addCase(loginUser.rejected,(state,action)=>(
//                 state.isLoading = false,
//                 state.isError = true,
//                 state.message = action.payload
//             ))
//             .addCase(registerUser.pending,(state)=>(
//                  state.isLoading = true,
//                 state.message = "Registering You..."
//             ))
//             .addCase(registerUser.fulfilled,(state,action)=>(
//                 state.isLoading = false,
//                 state.isError = false,
//                 state.isSuccess = true,
//                 state.loggedIn = true,
//                 state.message = "Registration is Successfull"
//             ))
//             .addCase(registerUser.rejected,(state,action)=>(
//                 state.isLoading = false,
//                 state.isError = true,
//                 state.message = action.payload
//             ))
//         }
// });


// export default authSlice.reducer;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
       reset:()=>initialState,
       handleLoginUser:(state)=>{
        state.message = "hello"
       },
       emptyMessage:(state)=>{
        state.message = ""
       }

  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.message = "Logging in...";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.loggedIn = true;
        state.message = "Login successful!";
      })
      // .addCase(loginUser.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.message = action.payload?.message || "Login failed!";
      // })
      .addCase(loginUser.rejected, (state, action) => {
  state.isLoading = false;
  state.isError = true;
  // backend me error key 'message' ho ya 'error', dono cover karte hain
  state.message = action.payload?.message || action.payload?.error || "Login failed!";
})
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.message = "Registering...";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.loggedIn = false;
        state.message = "Registration successful!";
      })
      // .addCase(registerUser.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.message = action.payload?.message || "Registration failed!";
      // });
      .addCase(registerUser.rejected, (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.message = action.payload?.message || action.payload?.error || "Registration failed!";
})
  },
});

export const {reset, emptyMessage} = authSlice.actions;

export default authSlice.reducer;