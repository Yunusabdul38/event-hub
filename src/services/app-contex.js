import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./Auth/user-context";
import { eventReducer } from "./Auth/event-contex";



const reducer =combineReducers({user:userReducer,events:eventReducer})
const store = configureStore({
  reducer: reducer,
}); 
export default store
