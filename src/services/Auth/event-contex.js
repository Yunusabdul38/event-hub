import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let Base_url = "https://apis-event-hub.onrender.com/api/events"

export const getEvents = createAsyncThunk(
    'get',
    // async () => {
    //     const token =
    //     "eycJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmM3MTg5NTY0ZDRkZDJiZjg5NWQzNDYiLCJpYXQiOjE3MjYyNzQyMjEsImV4cCI6MTcyODg2NjIyMX0.If99rA1BFIbZkDY1_7bmCHhIgPXfkczNfljuDx3tPho";
        
    //     //      try {
    //     //       const response = await axios.get(`https://apis-event-hub.onrender.com/api/event/all`, {
    //     //         headers: {
    //     //            "x-auth-token": token,
    //     //          },});
    //     //        console.log('Created:', response.data);
    //     //        return response.data;
    //     //      } catch (error) {
    //     //        console.error("Error fetching data:", error);
    //     //      }
    //   try{
    //         const reqest = await fetch("https://apis-event-hub.onrender.com/api/event/all", {
    //           method: "GET",
    //           headers: {
    //             "Content-Type": "application/json",
    //             "x-auth-token": token,
    //           },
    //         });
    //         const res = await reqest.json()
    //         return res
    //       }catch(error){
    //         return error.message;
    //       }
    // },
  )

const  eventSlice =createSlice({
    name: 'event',
    initialState: {
        events: [],
        error:null,
        loading: false,
    },
   extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
        state.error = null;
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
})
export const eventReducer = eventSlice.reducer