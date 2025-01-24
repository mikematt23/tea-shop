import style from "./Login.module.css"
import Card from "../UI/Card/Card.jsx"
import Header from "../Header/Header.jsx"
import Input from "../UI/Input/Input.jsx"
import Button from "../UI/Button/Button.jsx"
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx"
import { useState } from "react"
import { showError } from "../../Store/Slices/ErrorSlice.js"
import { createPortal } from "react-dom"
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from "../../Store/Slices/UserSlice.js"
import { useRef } from "react"



const Login = ({})=>{
  const userNameRef = useRef()
  const passwordRef = useRef()
  
  const [message, setMesage] = useState("")

  const user = useSelector(state => state.user)
  const error = useSelector(state => state.error.showError)
  const dispatch = useDispatch()
 
  const handleLogIn = (e)=>{
    if(
        userNameRef.current.value === '' || 
        passwordRef.current.value === ""
    ){
      setMesage("You must enter a user name and password")
      return dispatch(showError())
    }
    
    fetch()
    dispatch(setUser(userNameRef.current.value))
  }

  const handleSignUp = ()=>{
    //navagate to sign up component thru react router
    console.log("at sign up")
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
          <Button onClick={handleSignUp}>Sign Up</Button>
        </div>
      </Card>
    </>
  )
}

export default Login