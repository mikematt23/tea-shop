import { useEffect } from "react"
import Header from "../Header/Header"
import Card from "../UI/Card/Card"
import { useSelector } from "react-redux"
import { Navigate } from "react-router";
import { redirect } from "react-router";


const TeaShop = ()=>{
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)

  return(
    <>
    <Header/>
      <Card>
      {isLoggedIn&&<h1>Logged In</h1>}
      {!isLoggedIn&& <>
        <h1>not Logged In</h1>
        <h2>Please click to log in or sign up</h2>
      </>}
      </Card>
    </>
  )
}


export default TeaShop