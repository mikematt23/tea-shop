import style from "./Login.module.css"
import Card from "../UI/Card/Card.jsx"
import Header from "../Header/Header.jsx"
import Input from "../UI/Input/Input.jsx"
import Button from "../UI/Button/Button.jsx"

const Login = ({})=>{

  const handleLogIn = ()=>{
    console.log("here")
    //http request to see if input come back to a user
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
          <Input type="text" placeHolder="UserName"/>
          <Input type="password" placeHolder="Password"/>
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