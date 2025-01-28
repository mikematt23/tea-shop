import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
  name:"User",
  initialState:{
    id:0,
    userName:"",
    password:"",
    isLoggedIn: false
  },
  reducers:{
    setUser : (state, action)=>{
       state.id = action.payload.Id
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