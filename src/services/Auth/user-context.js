import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userSignIn = createAsyncThunk(
    'user/signIn',
    async (data) => {
        const requestOptions = {
            method: 'POST',
            body:JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
              },
          };
          try{
            const request = await fetch("http://{{localhost}}:8080/api/users/login", requestOptions)
            if(!request.ok){
                throw new Error(request.status)
            }
            const response = await request.json()
            return response
          }catch(error){
            console.log(`${error.message} error`)
          }
    },
  )

  const userSignUp = createAsyncThunk(
    'user/signUp',
    async (data) => {
        const requestOptions = {
            method: 'POST',
            body:JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
              },
          };
          try{
            const request = await fetch("http://{{localhost}}:8080/api/users/login", requestOptions)
            if(!request.ok){
                throw new Error(request.status)
            }
            const response = await request.json()
            return response
          }catch(error){
            console.log(`${error.message} error`)
          }
    },
  )
const  authentication =createSlice({
    name: 'authentication',
    initialState: {
        isAuthenticated: false,
        user: null,
        token: null,
        error:null,
    },
    reducers: {
        signUp: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(userSignIn.fulfilled,(state,action)=>{
            state.isAuthenticated=true
            state.user=action.payload         
            state.token = action.payload.token;   
            state.error=null
        }),
        builder.addCase(userSignIn.rejected,(state,action)=>{
            state.error=action.error            
        }),
        builder.addCase(userSignUp.fulfilled,(state,action)=>{
            state.isAuthenticated=true
            state.user=action.payload         
            state.token = action.payload.token;   
            state.error=null
        }),
        builder.addCase(userSignUp.rejected,(state,action)=>{
            state.error=action.error            
        })
    }
});

export const { login, logout } = authentication.actions;
export const userReducer = authentication.reducer;
