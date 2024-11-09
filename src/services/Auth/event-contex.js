import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { END_POINT } from "../../config/environment";

// export const getEvents = createAsyncThunk(
//     'get',
//     async () => {
//       try{
//             const reqest = await fetch(`${END_POINT.BASE_URL}/event/all?limit=10`, {
//               method: "GET",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//             });
//             const response = await reqest.json()
//             return response.events
//           }catch(error){
//             return error.message;
//           }
//     },
//   )


const  eventSlice =createSlice({
    name: 'event',
    initialState: {
        events: [],
        error:null,
        loading: false,
    },
    reducers:{
      updateEventList:(state,action)=>{
        state.events = action.payload
        state.error = null
        state.loading=false
      },   
      updateEventListError:(state,action)=>{
        state.error = action.payload,
        state.loading = false
      },    
      updateEventListLoading:(state,action)=>{
        state.loading = true
      },
    },
  //  extraReducers: (builder) => {
  //   builder
  //     .addCase(getEvents.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(getEvents.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.events = action.payload;
  //       state.error = null;
  //     })
  //     .addCase(getEvents.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message;
  //     })
  // }
})
export const {updateEventList,updateEventListError,updateEventListLoading} = eventSlice.actions
export const eventReducer = eventSlice.reducer