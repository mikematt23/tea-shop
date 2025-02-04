import Header from "../Header/Header"
import Card from "../UI/Card/Card"
import Button from "../UI/Button/Button"
import TeaProduct from "../Products/TeaProduct"
import style from "./TeaShop.module.css"

import { setUser } from "../../Store/Slices/UserSlice"

import { useEffect,useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router";
import { redirect } from "react-router";


const TeaShop = ()=>{
  const isLoggedIn = localStorage.getItem("loggedIn")
  
  const [stateItems,setStateItems] = useState([])
 
  useEffect(()=>{
    const fetchItems = async()=>{
      const response2 = await fetch("http://localhost:3000/teaItems",{
        method: "get"
      })
      const json2 = await response2.json()
      setStateItems(json2)
    }
    fetchItems()
  },[])
 const navigate = useNavigate()

 const handleClick = (id)=>{
     navigate(`/product/${id}`)
  }

  return(
    <>
    <Header/>
      <Card>
      {!isLoggedIn&& <>
      <p>not working</p>
        <h1>not Logged In</h1>
        <h2>Please click to log in or sign up</h2>
      </>}
      {isLoggedIn && <h3 className={style.h3}>Welcome to the Shop please browse around!</h3>}
      {isLoggedIn&& <div className={style.gridHolder}>
        {stateItems.map((item)=>{
          return (
            <>
            <div key={item.Id} className={style.gridItem}>
              <TeaProduct id={item.Id} name={item.teaName} description={item.teaDescription} price={item.Price}/>
              <Button onClick={()=>{handleClick(item.Id)}} >More details</Button>
            </div></>)
        })}
      </div>}
      </Card>
    </>
  )
}


export default TeaShop