import { createSlice } from "@reduxjs/toolkit";


const ErrorSlice = createSlice({
    name:"error",
    initialState:{
        showError: false
    },
    reducers:{
        showError:(state)=>{
            state.showError = true
        },
        closeError: (state)=>{
            state.showError = false
        }
    }
})

export const {showError, closeError} = ErrorSlice.actions
export default ErrorSlice.reducer