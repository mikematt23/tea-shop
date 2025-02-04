//components
import Card from "../UI/Card/Card"
import Header from "../Header/Header"
import Input from "../UI/Input/Input"
import Button from "../UI/Button/Button"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
//react hooks
import { useNavigate } from "react-router"
import { useRef, useState } from "react"
import { createPortal } from "react-dom"
import { useDispatch, useSelector } from "react-redux"
//redux state methods
import { showError } from "../../Store/Slices/ErrorSlice"
import { setUser } from "../../Store/Slices/UserSlice"

const SignUp = ()=>{
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const error = useSelector(state => state.error.showError) 
    
    const userNameRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const [message, setMesage] = useState('')

    const handleFormSubmit = async ()=>{
       if(
          userNameRef.current.value === '' || 
          passwordRef.current.value === '' ||
          confirmPasswordRef.current.value === ''
       ){
        setMesage("The form Must be filled out")
        return dispatch(showError())
       }
       if(passwordRef.current.value != confirmPasswordRef.current.value){
         setMesage("Password must Match")
         return dispatch(showError())
       }
       const response = await fetch("http://localhost:3000/teaSignUp",{
         method:"post",
         headers:{
            "Content-type": "application/json"
         },
         body:JSON.stringify({
            userName: userNameRef.current.value,
            password:passwordRef.current.value
         })
       })
       const json = await response.json()
       console.log(json)
       console.log(json)
       if(json.message === "not added"){
          setMesage("Already a user plaese login in to continue")
          return dispatch(showError())
       }
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
          <h2>Please Complete the form</h2>
          <Input ref={userNameRef} type="text" placeHolder="User Name"/> 
          <Input ref={passwordRef} type="password" placeHolder="Password"/> 
          <Input ref={confirmPasswordRef} type="password" placeHolder="Confirm Password"/>
          <Button onClick={handleFormSubmit}>Submit</Button>       
        </Card>
      </>
    )
}



export default SignUp