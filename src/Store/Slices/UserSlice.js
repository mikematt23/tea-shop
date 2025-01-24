import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
  name:"User",
  initialState:{
    userName:"",
    password:"",
    isLoggedIn: false
  },
  reducers:{
    setUser : (state, action)=>{
       state.userName = action.payload.userName
       state.password = action.payload.password
       state.isLoggedIn = true
    },
    setAddress : (state,action)=>{
      return state.address = action.payload
    },
    logOut: (state)=>{
      state.userName = ''
      state.password = ''
      state.isLoggedIn = false
      
    }
  }
})

export const {setUser, setAddress, logOut} = UserSlice.actions
export default UserSlice.reducer