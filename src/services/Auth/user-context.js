import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { END_POINT } from "../../config/environment";
import toast from "react-hot-toast";


export const userSignIn = createAsyncThunk(
    'user/signIn',
    async (data,{ rejectWithValue }) => {
      try{
        const request = await fetch(`${END_POINT.BASE_URL}/users/login`,{
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        const response = await request.json()
        if(request.status !== 200){
          throw new Error(response.message);
        }
        toast.success("welcome back")
        return response;
      }catch(error){
        toast.error(error.message)
        return rejectWithValue(error.message)
      }
    }
  )

export const userSignUp = createAsyncThunk(
    'user/signUp',
    async (data,{ rejectWithValue }) => {
      try{
        const request = await fetch("https://apis-event-hub.onrender.com/api/users/signup", {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (!request.ok){
          throw new Error(`Failed to create user`);
        }
        const res = await request.json()
        toast.success("welcome to event hub")
        return res;
      }catch(error){
        toast.error(error.message)
        return rejectWithValue(error.message);
      }
    },
  )

  export const updateUserDetails = createAsyncThunk(
    'user/update',
    async (data,{ rejectWithValue }) => {
      const {data:updateData, token} = data   
        try{
            const reqest = await fetch(`${END_POINT.BASE_URL}/users/me/update`, {
              method: "put",
              headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
              },
              body: JSON.stringify(updateData),
            });
            if (!reqest.ok){
              throw new Error(`Failed to create user st: ${reqest.status} stText${reqest.statusText} formdata ${reqest.formData} body ${reqest.body}`);
            }
            const res = await reqest.json()
            console.log(res)
            return res
          }catch(error){
            return rejectWithValue(error.message);
          }
    },
  )  
  export const logUserOut = createAsyncThunk(
    'user/sign-out',
    async () => { 
        try{
            const reqest = await fetch(`${END_POINT.BASE_URL}/users/logout`);
            if (!reqest.ok){
              throw new Error(`Failed to create user st: ${reqest.status} stText${reqest.statusText} formdata ${reqest.formData} body ${reqest.body}`);
            }
            const res = await reqest.json()
            toast.success("Logged out")
            return res.success
          }catch(error){
            toast.error(error.message)
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
      builder.addCase(userSignIn.pending,(state)=>{
        state.error=null,
        state.loading=true
    }),
        builder.addCase(userSignIn.fulfilled,(state,action)=>{
            console.log(action)
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
            state.loading=false
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
        }),
        builder.addCase(logUserOut.pending,(state,action)=>{
          state.error=null,
          state.loading=true
      }),
      builder.addCase(logUserOut.fulfilled,(state,action)=>{
        console.log(action.payload)
          state.user=null
          state.loading = false;
          state.token = null;
          state.error=null
      }),
      builder.addCase(logUserOut.rejected,(state,action)=>{
        console.log(action)
          state.error=action.error
          state.loading=false
      })
    }
});

export const { logout } = authentication.actions;
export const userReducer = authentication.reducer;
