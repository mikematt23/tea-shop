import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
  name:"User",
  initialState:{
    userName:"",
    password:"",
    address:"",
    isLoggedIn: FontFaceSetLoadEvent
  },
  reducers:{
    setUser : (state, action)=>{
       state.userName = action.payload.userName
       state.password = action.payload.password
       state.address = action.payload.address
       state.isLoggedIn = true
    },
    setAddress : (state,action)=>{
      return state.address = action.payload
    },
    logOut: (state)=>{
      state.userName = ''
      state.password = ''
      state.address = ''
      state.isLoggedIn = false
      
    }
  }
})

export const {setUser, setAddress, logOut} = UserSlice.actions
export default UserSlice.reducer