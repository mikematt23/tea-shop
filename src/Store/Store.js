import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./Slices/UserSlice"
import cartReducer from "./Slices/CartSlice"
import errorReducer from "./Slices/ErrorSlice"
import productReducer from "./Slices/ProductsSlice"

const store = configureStore({
  reducer:{
    user : userReducer,
    cart: cartReducer,
    error: errorReducer,
    products: productReducer
  }
}); 

export default store