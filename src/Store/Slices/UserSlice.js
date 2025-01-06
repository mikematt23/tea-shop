import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
  name:"User",
  initialState:{
    userName:"",
    password:"",
    address:"",
    isLoggedIn: false
  },
  reducers:{
    setUser : (state, action)=>{
      console.log(action)
       state.userName = action.payload
    },
    setAddress : (state,action)=>{
      return state.address = action.payload
    }
  }
})

export const {setUser} = UserSlice.actions
export default UserSlice.reducer