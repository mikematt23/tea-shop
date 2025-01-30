import style from "./Login.module.css"
import Card from "../UI/Card/Card.jsx"
import Header from "../Header/Header.jsx"
import Input from "../UI/Input/Input.jsx"
import Button from "../UI/Button/Button.jsx"
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx"

import { showError } from "../../Store/Slices/ErrorSlice.js"
import { setUser } from "../../Store/Slices/UserSlice.js"
import { setItems } from "../../Store/Slices/ProductsSlice.js"

import { useState,useRef } from "react"
import { createPortal } from "react-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router"





const Login = ({})=>{
  const navigate = useNavigate()
  const userNameRef = useRef()
  const passwordRef = useRef()
  
  const [message, setMesage] = useState("")

  const error = useSelector(state => state.error.showError)
  const dispatch = useDispatch()
 
  const handleLogIn = async (e)=>{
    if(userNameRef.current.value === '' || 
        passwordRef.current.value === "")
    {
      setMesage("You must enter a user name and password")
      return dispatch(showError())
    }
    const response = await fetch("http://localhost:3000/teaLogin",{
      method:"post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        userName:`${userNameRef.current.value}`,
        password: `${passwordRef.current.value}`
      })
    })
    const json = await response.json()
    //when errors occur 
    if(json.message === "No user"){
      setMesage("No User Please Sgn Up to Continue")
      return dispatch(showError())
    }
    if(json.message === "Incorrect"){
      setMesage("Password does not match our records")
      return dispatch(showError())
    }
    //what should happen with no errors
    dispatch(setUser(json.user))
    navigate("/products")
  }


  return(
    <>
    {error && createPortal(
      <ErrorMessage message={message}/>,
      document.getElementById('error')
    )}
      <Header/>
      <Card>
        <h2>Please Log in or sign up</h2>
        <div className={style.inputHolder}>
          <Input ref={userNameRef} type="text" placeHolder="UserName"/>
          <Input ref={passwordRef} type="password" placeHolder="Password"/>
        </div>
        <div className={style.buttonHolder}>
          <Button onClick={handleLogIn}>Login</Button>
       
        </div>
      </Card>
    </>
  )
}

export default Login