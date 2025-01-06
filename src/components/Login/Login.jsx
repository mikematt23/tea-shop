import style from "./Login.module.css"
import Card from "../UI/Card/Card.jsx"
import Header from "../Header/Header.jsx"
import Input from "../UI/Input/Input.jsx"
import Button from "../UI/Button/Button.jsx"
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from "../../Store/Slices/UserSlice.js"
import { useRef } from "react"


const Login = ({})=>{
  const userNameRef = useRef()
  const passwordRef = useRef()
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleLogIn = (e)=>{
    
    //http request to see if input come back to a user
    dispatch(setUser(userNameRef.current.value))
  }

  const handleSignUp = ()=>{
    //navagate to sign up component thru react router
    console.log("at sign up")
  }
  return(
    <>
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