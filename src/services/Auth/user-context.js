import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


let Base_url = "https://apis-event-hub.onrender.com/api/users/"
export const userSignIn = createAsyncThunk(
    'user/signIn',
    async (data) => {
        try{
            const reqest = await fetch("https://apis-event-hub.onrender.com/api/users/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            const res = await reqest.json()
            return res
          }catch(error){
            return error.message;
          }
    },
  )

export const userSignUp = createAsyncThunk(
    'user/signUp',
    async (data) => {
      try{
        const reqest = await fetch("https://apis-event-hub.onrender.com/api/users/signup", {
          method: "Put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (!reqest.ok){
          throw new Error(`Failed to create user st: ${reqest.status} stText${reqest.statusText} formdata ${reqest.formData} body ${reqest.body}`);
        }
        const res = await reqest.json()
        return res
      }catch(error){
        return error.message;
      }
    },
  )

  export const updateUserDetails = createAsyncThunk(
    'user/update',
    async (data) => {
      const {data:updateData, token} = data   
        try{
            const reqest = await fetch("https://cemp-backend.onrender.com/api/users/me/update", {
              method: "put",
              headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
              },
              body: JSON.stringify(updateData),
            });
            if (!reqest.ok){
              throw new Error('Failed to update user details');
            }
            const res = await reqest.json()
            console.log(res)
            return res
          }catch(error){
            return error.message;
          }
    },
  )  
const  authentication =createSlice({
    name: 'authentication',
    initialState: {
        user: null,
        token: null,
        error:null,
        loading: false,
    },
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
        },
    },
    extraReducers:(builder)=>{
      builder.addCase(userSignIn.pending,(state,action)=>{
        state.error=null,
        state.loading=true
    }),
        builder.addCase(userSignIn.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.user=action.payload.data.user         
            state.token = action.payload.token;
            state.loading=false
            state.error=null
        }),
        builder.addCase(userSignIn.rejected,(state,action)=>{
            state.error=action.error            
            state.loading=false
        }),
        builder.addCase(userSignUp.pending,(state)=>{
          state.error=null,
          state.loading=true
      }),
        builder.addCase(userSignUp.fulfilled,(state,action)=>{
            state.user=action.payload
            state.loading=false         
            state.token = action.payload.token;   
            state.error=null
        }),
        builder.addCase(userSignUp.rejected,(state,action)=>{
          console.log(action,state)
            state.error=action.error            
            state.token = null;
        }),
        builder.addCase(updateUserDetails.pending,(state,action)=>{
            console.log(action,"pending")
            state.error=null,
            state.loading=true
        }),
        builder.addCase(updateUserDetails.fulfilled,(state,action)=>{
          console.log(action.payload)
            state.user=action.payload
            state.loading = false;
            state.token = action.payload.token;
            state.error=null
        }),
        builder.addCase(updateUserDetails.rejected,(state,action)=>{
            state.error=action.error
            state.loading=false
        })
    }
});

export const { logout } = authentication.actions;
export const userReducer = authentication.reducer;
