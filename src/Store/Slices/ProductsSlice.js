import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name:"products",
    initialState:{
        items:[]
    },
    reducers: {
        setItems:(state,action)=>{
            console.log(action.payload)
           state.items = action.payload
        }
    }
})

export const {setItems} = ProductSlice.actions
export default ProductSlice.reducer