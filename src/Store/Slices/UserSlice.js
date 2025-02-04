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
       state.isLoggedIn = true
       localStorage.setItem("user", action.payload.Id)
       localStorage.setItem("loggedIn",true)
    },

    logOut: (state)=>{

      state.id = 0
      state.userName = ''
      state.password = ''
      state.isLoggedIn = false
    
    }
  }
})

export const {setUser, logOut} = UserSlice.actions
export default UserSlice.reducer