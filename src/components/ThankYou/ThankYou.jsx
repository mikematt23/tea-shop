import Header from "../Header/Header"
import Card from "../UI/Card/Card"
import { useEffect } from "react"

const ThankYou  = ()=>{
  useEffect(()=>{
    sessionStorage.removeItem('cart')
  },[])
   return(
    <>
      <Header/>
      <Card>
        <h2>Thank You For Your Purchace</h2>
        <h4>We look faward to filling all your tea needs</h4>
      </Card>
    </>
   )
}

export default ThankYou