import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./Slices/UserSlice"
import cartReducer from "./Slices/CartSlice"
import errorReducer from "./Slices/ErrorSlice"

const store = configureStore({
  reducer:{
    user : userReducer,
    cart: cartReducer,
    error: errorReducer
  }
}); 

export default store