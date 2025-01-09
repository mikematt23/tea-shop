import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState:{
    showCart: false,
    //will contain an array of objects
    cartItems:[]
  },
  reducers:{
    showCart : (state)=>{
      state.showCart = true
    },
    closeCart: (state)=>{
      state.showCart = false
    },
    addItem: (state,action)=>{
      state.cartItems =[
        ...state.cartItems,
        action.payload.item
      ]
    },
    removeItem:(state,action)=>{
       const filteredItems = state.cartItems.filter((item)=>{
         if(!item.id === action.payload.id){
          return item
         }
       })
    }
  }
})

export const {showCart,closeCart,addItem,removeItem} = CartSlice.actions
export default CartSlice.reducer