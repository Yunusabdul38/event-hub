import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./Auth/user-context";



const reducer =combineReducers({user:userReducer})
const store = configureStore({
  reducer: reducer,
}); 
export default store
